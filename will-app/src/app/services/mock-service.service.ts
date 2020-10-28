import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}categories`);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}categories/${id}`);
  }
}
