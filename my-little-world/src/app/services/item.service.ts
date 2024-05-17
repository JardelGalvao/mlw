import { Injectable } from '@angular/core';
import { Items, Categories, SubCategories } from '../types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient,
  ) { }

  getItems(): Observable<Items[]>{
    return this.http.get<Items[]>('/api/items')
  }

  getCategories(userId: number): Observable<Categories[]>{
    return this.http.get<Categories[]>(`/api/${userId}/categories`)
  }

  getSubCategories(userId: number, categorieId: number): Observable<SubCategories[]>{
    return this.http.get<SubCategories[]>(`/api/${userId}/${categorieId}/sub-categories`)
  }
}
