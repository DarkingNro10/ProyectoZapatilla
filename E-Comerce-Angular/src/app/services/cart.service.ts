import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/carrito';

  constructor(private http: HttpClient) { }

  addToCart(cartItem: Carrito): Observable<Carrito> {
    return this.http.post<Carrito>(`${this.baseUrl}/add`, cartItem);
  }

  getCartItems(userId: number): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(`${this.baseUrl}/${userId}`);
  }

  removeFromCart(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/remove/${id}`);
  }
}
