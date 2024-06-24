import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../producto';
import { CategoriaService } from '../../../categorias/categoria.service';
import { Categoria } from 'src/app/categorias/categoria';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  producto: Producto = new Producto();
  categorias: Categoria[] = [];
  titulo: string = 'Agregar Producto';

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarProducto();
    this.categoriaService.getCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categorias = categorias;
        console.log(this.categorias);
      },
      error => console.error('Error fetching categories', error)
    );
  }

  cargarProducto(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.productoService.getProducto(id).subscribe(
          (producto: Producto) => {
            this.producto = producto;
            this.producto.categoriaId = this.producto.categoria?.id || 0;
            this.titulo = 'Editar Producto';
          },
          error => console.error('Error fetching product', error)
        );
      }
    });
  }

  onSubmit(): void {
    if (this.producto.id) {
      this.productoService.updateProducto(this.producto).subscribe(
        () => this.router.navigate(['/productos']),
        error => console.error('Error updating product', error)
      );
    } else {
      this.productoService.createProducto(this.producto).subscribe(
        () => this.router.navigate(['/productos']),
        error => console.error('Error creating product', error)
      );
    }
  }
}
