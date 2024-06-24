import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  titulo: string = 'Listado de Categorías';

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        console.log(data); // Verifica los datos recibidos
        this.categorias = data;
      },
      error => console.error('Error fetching categories', error)
    );
  }

  delete(categoria: Categoria): void {
    this.categoriaService.deleteCategoria(categoria.id).subscribe(
      () => this.categorias = this.categorias.filter(c => c !== categoria),
      error => console.error('Error deleting category', error)
    );
  }
}
