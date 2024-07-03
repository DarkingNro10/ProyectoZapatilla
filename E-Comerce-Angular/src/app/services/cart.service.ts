import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/carrito';

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  addToCart(cartItem: Carrito): Observable<Carrito> {
    return this.http.post<Carrito>(`${this.baseUrl}/add`, cartItem);
  }

  getCartItems(userId: number): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(`${this.baseUrl}/${userId}`);
  }

  getTotalPrice(userId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total/${userId}`);
  }

  removeFromCart(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/remove/${id}`);
  }
}
