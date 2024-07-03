import { Categoria } from './categoria'; // Ajusta la ruta según la estructura de tu proyecto

export class Producto {
  id: number;
  nombre: string;
  costo: string; // Asumiendo que en Java es un String, ajusta según tus necesidades
  categoriaId: number;
  tasaIGV: string;
  descripcion: string;
  codigoBarras: string;
  cantidadStock: string;
  disponible: string;
  proveedor: string;
  categoria: Categoria | null; // Añade null como un posible tipo

  constructor() {
    this.id = 0; // Puedes inicializar con un valor por defecto si es necesario
    this.nombre = '';
    this.costo = '';
    this.categoriaId = 0;
    this.tasaIGV = '';
    this.descripcion = '';
    this.codigoBarras = '';
    this.cantidadStock = '';
    this.disponible = '';
    this.proveedor = '';
    this.categoria = null; // Inicializa la propiedad categoria con null
  }
}
