import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CartService } from 'src/app/services/cart.service';
import { Producto } from 'src/app/models/produc'; // Ajusta la ruta según la ubicación de tu modelo
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(productId: number): void {
    this.productoService.getProducto(productId).subscribe((producto) => {
      this.productData = producto;
    });
  }

  addToCart(): void {
    if (!this.productData) {
      return;
    }

    const cartItem: Carrito = {
      id: 0,
      productId: this.productData.id,
      productName: this.productData.nombre,
      productPrice: Number(this.productData.costo),
      cantidad: 1,
      subtotal: Number(this.productData.costo),
      categoria: this.productData.categoria,
      userId: 1 // Establecer userId predeterminado a 1
    };

    this.cartService.addToCart(cartItem).subscribe({
      next: () => {
        console.log('Producto añadido al carrito');
      },
      error: (error) => {
        console.error('Error añadiendo al carrito:', error);
      }
    });
  }
}
