import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  // Data (Matches your Seed Script)
  weatherData: any = null;
  mandiData: any[] = [];
  smartPredictions: any[] = [];
  diseasesData: any[] = [];
  yieldResult: string | null = null;

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
  }

  // ========== WEATHER (Matches Seed Schema) ==========
  getLiveWeather(city: string) {
    this.http.get(`${this.API_BASE}/weather?city=${city}`).subscribe({
      next: (res: any) => {
        // Handle both {success: true, data: {...}} and direct {...}
        this.weatherData = res.data ? res.data : res;
        console.log("Weather Loaded:", this.weatherData);
      },
      error: (err) => console.error("Weather API Error", err)
    });
  }

  // ========== MANDI (Matches Seed Schema) ==========
  loadMandiRates() {
    this.http.get(`${this.API_BASE}/mandi-rates`).subscribe((res: any) => {
      this.mandiData = res.success ? res.data : res;
    });
  }

  // ========== DISEASES (Matches Seed Schema) ==========
  loadDiseases() {
    this.http.get(`${this.API_BASE}/diseases`).subscribe((res: any) => {
      this.diseasesData = res.success ? res.data : res;
    });
  }

  // ========== YIELD CALCULATION ==========
  calculateYield() {
    if (!this.selectedArea) {
      alert("Please enter area size");
      return;
    }
    const body = { crop: this.selectedCrop, area: this.selectedArea, unit: this.selectedUnit };
    this.http.post(`${this.API_BASE}/calculate-yield`, body).subscribe((res: any) => {
      this.yieldResult = `${res.total_yield} Quintals`;
    });
  }

  // ========== SMART MANDI & HELPERS ==========
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
  // Manual data mapping
  const cropData: { [key: string]: any } = {
    'wheat': { name: 'Wheat (गहू)', soil: 'Clayey Loam', water: 'Moderate' },
    'rice': { name: 'Rice (तांदूळ)', soil: 'Deep Clayey', water: 'High' },
    'cotton': { name: 'Cotton (कापूस)', soil: 'Black Soil', water: 'Moderate' },
    'sugarcane': { name: 'Sugarcane (ऊस)', soil: 'Alluvial/Black', water: 'Very High' }
  };

  // Get data for the selected crop (lowercase to match keys)
  const crop = cropData[c.toLowerCase()];

  if (crop) {
    alert(`🌾 Crop: ${crop.name}\n🌱 Soil: ${crop.soil}\n💧 Water: ${crop.water}`);
  } else {
    alert("Crop information not found.");
  }

  /* Original HTTP code commented out for reference:
     this.http.get(`${this.API_BASE}/crops/${c}`).subscribe(...) 
  */
}
}