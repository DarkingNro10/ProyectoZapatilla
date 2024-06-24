import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  titulo: string = 'Lista de Productos';

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => {
        this.productos = productos;
        this.cargarCategorias();
      }
    );
  }

  cargarCategorias(): void {
    this.productos.forEach(producto => {
      this.productoService.getProducto(producto.id).subscribe(
        productoConCategoria => {
          producto.categoria = productoConCategoria.categoria;
        }
      );
    });
  }

  delete(producto: Producto): void {
    if (confirm(`¿Está seguro de que desea eliminar el producto ${producto.nombre}?`)) {
      this.productoService.deleteProducto(producto.id).subscribe(
        response => {
          this.productos = this.productos.filter(p => p !== producto);
          alert('Producto eliminado con éxito.');
        },
        error => {
          console.log(producto);
          alert('Error al eliminar el producto.');
        }
      );
    }
  }
}
