import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Carrito[] = [];
  totalAmount: number = 0;
  userId: number = 1; // Definimos un userId por defecto

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartItems(this.userId).subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.cartService.getTotalPrice(this.userId).subscribe((total) => {
      this.totalAmount = total;
    });
  }

  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId).subscribe(() => {
      this.loadCart();
    }, (error) => {
      console.error('Error al eliminar el producto del carrito', error);
    });
  }
}
