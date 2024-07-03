import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/pedido'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}`);
  }

  getCliente(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/${id}`);
  }

  createCliente(cliente: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.baseUrl, cliente);
  }

  updateCliente(cliente: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.baseUrl}/${cliente.id}`, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
