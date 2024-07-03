export class Cliente {
  id: number;
  nombre: string;
  dni: string;
  direccion: string;
  telefono: number;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.dni = '';
    this.direccion = '';
    this.telefono = 0;
  }
}
