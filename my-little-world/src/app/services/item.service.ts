import { Injectable } from '@angular/core';
import { Items } from '../types';
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
}
