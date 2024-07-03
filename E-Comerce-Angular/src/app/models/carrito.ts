// src/app/models/carrito.ts
import { Categoria } from './categoria'; // Ajusta la ruta según la estructura de tu proyecto

export class Carrito {
  id: number;
  productId: number;
  productName: string;
  productPrice: number;
  cantidad: number;
  subtotal: number;
  categoria: Categoria | null;

  constructor() {
    this.id = 0;
    this.productId = 0;
    this.productName = '';
    this.productPrice = 0;
    this.cantidad = 1;
    this.subtotal = 0;
    this.categoria = null;
  }
}
