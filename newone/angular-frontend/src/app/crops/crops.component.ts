import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CropService, Crop } from '../crop.service';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crops.component.html',
})
export class CropsComponent implements OnInit {
  crops: Crop[] = [];
  showForm = false;
  isEditing = false;
  loading = false;
  message = '';

  formData: Crop = {
    name: '', soil_type: '', season: '',
    water_requirements: '', fertilizer: '',
    yield_per_acre: '', duration: '', description: ''
  };

  constructor(private cropService: CropService) {}

  ngOnInit() { this.loadCrops(); }

  loadCrops() {
    this.loading = true;
    this.cropService.getAll().subscribe({
      next: (res) => { this.crops = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openAdd() {
    this.isEditing = false;
    this.formData = { name: '', soil_type: '', season: '',
      water_requirements: '', fertilizer: '',
      yield_per_acre: '', duration: '', description: '' };
    this.showForm = true;
  }

  openEdit(crop: Crop) {
    this.isEditing = true;
    this.formData = { ...crop };
    this.showForm = true;
  }

  save() {
    if (this.isEditing && this.formData._id) {
      this.cropService.update(this.formData._id, this.formData).subscribe({
        next: () => { this.message = '✅ Crop updated!'; this.showForm = false; this.loadCrops(); }
      });
    } else {
      this.cropService.create(this.formData).subscribe({
        next: () => { this.message = '✅ Crop added!'; this.showForm = false; this.loadCrops(); }
      });
    }
  }

  delete(id: string) {
    if (confirm('Delete this crop?')) {
      this.cropService.delete(id).subscribe({
        next: () => { this.message = '🗑️ Crop deleted!'; this.loadCrops(); }
      });
    }
  }
}