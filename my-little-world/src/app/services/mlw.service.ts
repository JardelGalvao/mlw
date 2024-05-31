import { Injectable } from '@angular/core';
import { Items, Categories, SubCategories} from '../types';
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

export class mlwService {
  constructor(
    private http: HttpClient,
  ){}

  getItems(): Observable<Items[]>{
    return this.http.get<Items[]>('/api/items');
  }

  getAllCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(`/api/categories`);
  }

  getCategory(id: string): Observable<Categories>{
    return this.http.get<Categories>(`/api/categories/${id}`);
  }

  getSubCategory(id: string): Observable<SubCategories>{
    return this.http.get<SubCategories>(`/api/sub-categories/${id}`);
  }

  getAllSubCategories(): Observable<SubCategories[]>{
    return this.http.get<SubCategories[]>(`/api/sub-categories`);
  }

  createCategory(name: string, description: string): Observable<Categories>{
    return this.http.post<Categories>(
      '/api/categories',
      {name, description}
    );
  }

  createSubCategory(name: string, description: string, category_id: number){
    return this.http.post<SubCategories>(
      '/api/sub-categories',
      {name, description, category_id}
    );
  }

  deleteCategory(id: number): Observable<Categories>{
    return new Observable<Categories>(observer => {
      this.http.delete<Categories>(`/api/categories/${id}`, httpOptions)
      .subscribe(() => observer.next());
    });
  }

  deleteSubCategory(id: number): Observable<SubCategories>{
    return new Observable<SubCategories>(observer => {
      this.http.delete<SubCategories>(`/api/sub-categories/${id}`, httpOptions)
      .subscribe(() => observer.next());
    });
  }

  updateSubCategory(id: number, name: string, description: string, category_id: number): Observable<SubCategories>{
    return this.http.post<SubCategories>(
      `/api/sub-categories/${id}`,
      {name, description, category_id},
      httpOptions,
    );
  }

}
