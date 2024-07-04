import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = 'http://localhost:8080/pedido';

  constructor(private http: HttpClient) { }

  procesarPedido(userId: number): Observable<Pedido> {
    const pedido = {
      clienteId: 1, // Establece el clienteId a 1
      userId: userId
    };
    return this.http.post<Pedido>(`${this.baseUrl}/procesar/${userId}`, pedido);
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/${id}`);
  }

  generatePdf(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/pdf/${id}`, { responseType: 'blob' });
  }
}
