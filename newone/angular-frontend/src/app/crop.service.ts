import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Crop {
  _id?: string;
  name: string;
  soil_type: string;
  season: string;
  water_requirements: string;
  fertilizer: string;
  yield_per_acre: string;
  duration: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CropService {
  private apiUrl = 'https://mean-stack-ggqc.onrender.com/api/crops';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  create(crop: Crop): Observable<any> {
    return this.http.post(this.apiUrl, crop);
  }

  update(id: string, crop: Crop): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, crop);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}