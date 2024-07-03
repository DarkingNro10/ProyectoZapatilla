import { Producto } from './produc'; // Asegúrate de crear y ajustar la ruta según la estructura de tu proyecto

export class PedidoDetalle {
  id: number;
  cantidad: number;
  precio: number;
  productoId: number;
  producto: Producto;

  constructor() {
    this.id = 0;
    this.cantidad = 0;
    this.precio = 0;
    this.productoId = 0;
    this.producto = new Producto();
  }
}
