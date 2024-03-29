import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProviderClass } from '../models/providers.class';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  //URL endpoint to our express app
  private apiUrl = 'http://localhost:3000/api/providers/';

  constructor(private http: HttpClient) {}

  //Get all records
  getProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST - add a new record
  addProvider(newProvider: ProviderClass): Observable<any> {
    return this.http.post(this.apiUrl, newProvider);
  }
}
