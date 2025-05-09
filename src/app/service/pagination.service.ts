import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  apiUrl = 'http://localhost:4000/categories';

  constructor(private http: HttpClient) {}

  getCount() {
    return this.http.get<any>(this.apiUrl + '/count');
  }

  getPaginated(page: number, limit: number) {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getAllCategory() {
    return this.http.get<any>(this.apiUrl + '/all');
  }

  addCategory(add: any) {
    console.log(`b`, add);
    return this.http.post<any>(this.apiUrl, add);
  }

  deleteCategory(id: number) {
    return this.http.delete<any>(this.apiUrl + `/${id}`);
  }

  updateCategory(id: number, data: any) {
    return this.http.put<any>(this.apiUrl + `/${id}`, data);
  }
}
