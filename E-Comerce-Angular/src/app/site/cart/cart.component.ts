import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Carrito } from 'src/app/models/carrito';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Carrito[] = [];
  userId: number = 1; // Definimos un userId por defecto

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCartItems(this.userId).subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id).subscribe({
      next: (response) => {
        console.log(response.message);
        this.loadCart(); // Recargar el carrito después de eliminar el producto
      },
      error: (error) => {
        console.error('Error al eliminar el producto del carrito:', error);
      }
    });
  }

  confirmarCompra(): void {
    this.router.navigate(['/procesamiento-de-pedidos']);
  }
}
