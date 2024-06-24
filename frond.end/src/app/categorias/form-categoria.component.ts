import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  titulo: string = 'Crear Categoría';

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCategoria();
  }

  cargarCategoria(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.categoriaService.getCategoria(id).subscribe(
          (categoria: Categoria) => {
            this.categoria = categoria;
            this.titulo = 'Editar Categoría';
          }
        );
      }
    });
  }

  onSubmit(): void {
    if (this.categoria.id) {
      this.categoriaService.updateCategoria(this.categoria).subscribe(
        () => this.router.navigate(['/categorias'])
      );
    } else {
      this.categoriaService.createCategoria(this.categoria).subscribe(
        () => this.router.navigate(['/categorias'])
      );
    }
  }
}
