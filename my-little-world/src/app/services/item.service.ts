import { Injectable } from '@angular/core';
import { Items, Categories, SubCategories, Users } from '../types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
}


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

  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(`/api/categories`)
  }

  getSubCategories(userId: number, categorieId: number): Observable<SubCategories[]>{
    return this.http.get<SubCategories[]>(`/api/${userId}/${categorieId}/sub-categories`)
  }

  createCategory(name: string, description: string): Observable<Categories>{
    return this.http.post<Categories>(
      '/api/categories',
      {name, description}
    )
  }

  deleteCategory(id: number): Observable<Categories>{
    return new Observable<any>(observer => {
      this.http.delete<Categories>(`/api/categories/${id}`, httpOptions)
      .subscribe(() => observer.next());
    });
  }

}
