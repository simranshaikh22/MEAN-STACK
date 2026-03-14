import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CropService } from './crop.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  private readonly API_BASE = 'https://mean-stack-ggqc.onrender.com/api';

  // State
  currentLang = 'en';
  activeSection = 'weather';
  mandiView = 'simple';

  // Forms
  selectedCity = 'Pune';
  selectedCrop = 'wheat';
  selectedArea: number | null = null;
  selectedUnit = 'acre';

  // Data
  weatherData: any = null;
  mandiData: any[] = [];
  smartPredictions: any[] = [];
  diseasesData: any[] = [];
  yieldResult: string | null = null;

  // ===== CROPS CRUD =====
  crops: any[] = [];
  showCropForm = false;
  cropEditing = false;
  cropLoading = false;
  cropMessage = '';
  cropForm: any = {
    name: '', soil_type: '', season: '',
    water_requirements: '', fertilizer: '',
    yield_per_acre: '', duration: '', description: ''
  };

  constructor(private cropService: CropService) {}

  ngOnInit() {
    this.getLiveWeather(this.selectedCity);
    this.loadMandiRates();
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
  }

  showSection(id: string) {
    this.activeSection = id;
    if (id === 'mandi') this.loadMandiRates();
    if (id === 'diseases') this.loadDiseases();
    if (id === 'crops') this.loadCrops();
  }

  // ========== WEATHER ==========
  getLiveWeather(city: string) {
    this.http.get(`${this.API_BASE}/weather?city=${city}`).subscribe({
      next: (res: any) => {
        this.weatherData = res.data ? res.data : res;
      },
      error: (err) => console.error('Weather API Error', err)
    });
  }

  // ========== MANDI ==========
  loadMandiRates() {
    this.http.get(`${this.API_BASE}/mandi-rates`).subscribe((res: any) => {
      this.mandiData = res.success ? res.data : res;
    });
  }

  // ========== DISEASES ==========
  loadDiseases() {
    this.http.get(`${this.API_BASE}/diseases`).subscribe((res: any) => {
      this.diseasesData = res.success ? res.data : res;
    });
  }

  // ========== YIELD ==========
  calculateYield() {
    if (!this.selectedArea) { alert('Please enter area size'); return; }
    const body = { crop: this.selectedCrop, area: this.selectedArea, unit: this.selectedUnit };
    this.http.post(`${this.API_BASE}/calculate-yield`, body).subscribe((res: any) => {
      this.yieldResult = `${res.total_yield} Quintals`;
    });
  }

  // ========== SMART MANDI ==========
  showSmartView() {
    this.mandiView = 'smart';
    this.http.get(`${this.API_BASE}/smart-mandi`).subscribe((res: any) => {
      this.smartPredictions = res.success ? res.data : res;
    });
  }

  getMarathiName(c: string) {
    const map: any = { wheat: 'गहू', rice: 'तांदूळ', cotton: 'कापूस', sugarcane: 'ऊस' };
    return map[c] || '';
  }

  showCropInfo(c: string) {
    const cropData: { [key: string]: any } = {
      'wheat': { name: 'Wheat (गहू)', soil: 'Clayey Loam', water: 'Moderate' },
      'rice': { name: 'Rice (तांदूळ)', soil: 'Deep Clayey', water: 'High' },
      'cotton': { name: 'Cotton (कापूस)', soil: 'Black Soil', water: 'Moderate' },
      'sugarcane': { name: 'Sugarcane (ऊस)', soil: 'Alluvial/Black', water: 'Very High' }
    };
    const crop = cropData[c.toLowerCase()];
    if (crop) {
      alert(`🌾 Crop: ${crop.name}\n🌱 Soil: ${crop.soil}\n💧 Water: ${crop.water}`);
    } else {
      alert('Crop information not found.');
    }
  }

  // ========== CROPS CRUD ==========
  loadCrops() {
    this.cropLoading = true;
    this.cropService.getAll().subscribe({
      next: (res: any) => { this.crops = res.data || []; this.cropLoading = false; },
      error: () => { this.cropLoading = false; }
    });
  }

  openAddCrop() {
    this.cropEditing = false;
    this.cropForm = { name: '', soil_type: '', season: '',
      water_requirements: '', fertilizer: '',
      yield_per_acre: '', duration: '', description: '' };
    this.showCropForm = true;
  }

  openEditCrop(crop: any) {
    this.cropEditing = true;
    this.cropForm = { ...crop };
    this.showCropForm = true;
  }

  saveCrop() {
    if (this.cropEditing) {
      this.cropService.update(this.cropForm._id, this.cropForm).subscribe({
        next: () => { this.cropMessage = '✅ Crop updated!'; this.showCropForm = false; this.loadCrops(); }
      });
    } else {
      this.cropService.create(this.cropForm).subscribe({
        next: () => { this.cropMessage = '✅ Crop added!'; this.showCropForm = false; this.loadCrops(); }
      });
    }
  }

  deleteCrop(id: string) {
    if (confirm('Delete this crop?')) {
      this.cropService.delete(id).subscribe({
        next: () => { this.cropMessage = '🗑️ Deleted!'; this.loadCrops(); }
      });
    }
  }
}