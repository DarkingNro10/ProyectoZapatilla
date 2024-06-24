export class Categoria {
  id: number;
  titulo: string;
}

export class Producto {
  id: number;
  nombre: string;
  descripcion: string;
  costo: number;
  proveedor: string;
  categoriaId: number;
  categoria: Categoria;
}
