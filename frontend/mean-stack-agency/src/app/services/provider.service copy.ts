import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
