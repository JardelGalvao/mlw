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

  createItem(name: string, description: string, category_id: number, sub_category_id: number, creation_date: string, estimated_date: string, due_date: string, update_date: string, value: number): Observable<Items>{
    return this.http.post<Items>('/api/items', 
    {name, description, category_id, sub_category_id, creation_date, estimated_date, due_date, update_date, value});
  }

  getItems(): Observable<Items[]>{
    return this.http.get<Items[]>('/api/items');
  }

  getItem(id: string): Observable<Items>{
    return this.http.get<Items>(`/api/items/${id}`);
  }

  updateItem(id: number, name: string, description: string,  category_id: number, sub_category_id: number, estimated_date: string, update_date: string, due_date: string, value: number): Observable<Items>{
    return this.http.post<Items>(
      `/api/items/${id}`,
      {name, description, category_id, sub_category_id, estimated_date, update_date, due_date, value}

    );
  }


  deleteItem(id: number): Observable<Items> {
    return new Observable<Items>(observer => {
      this.http.delete<Items>(`/api/items/${id}`)
        .subscribe(() => observer.next())
    })
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

  updateCategory(id: number, name: string, description: string): Observable<Categories>{
    return this.http.post<Categories>(
      `/api/categories/${id}`,
      {name, description},
      httpOptions,
    );
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
