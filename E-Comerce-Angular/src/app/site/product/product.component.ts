import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/produc'; // Ajusta la ruta según la ubicación de tu modelo
import { ProductoService } from 'src/app/services/producto.service'; // Ajusta la ruta según la ubicación de tu servicio
import { CartService } from 'src/app/services/cart.service';
import { Carrito } from 'src/app/models/carrito';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: Producto | undefined;
  userId: number = 1; // Definimos un userId por defecto

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
    if (!this.productData) return;

    const cartItem: Carrito = {
      id: 0,
      productId: this.productData.id,
      productName: this.productData.nombre,
      productPrice: parseFloat(this.productData.costo),
      cantidad: 1,
      subtotal: parseFloat(this.productData.costo) * 1,
      categoria: this.productData.categoria
    };

    this.cartService.addToCart(cartItem).subscribe(() => {
      console.log('Producto agregado al carrito');
    }, (error) => {
      console.error('Error al agregar al carrito', error);
    });
  }
}
