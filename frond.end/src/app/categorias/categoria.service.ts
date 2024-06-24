import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl = 'http://localhost:8080/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}`);
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseUrl}`, categoria);
  }

  updateCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.baseUrl}/${categoria.id}`, categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
