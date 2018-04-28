import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {
  usuarios = [
    { id: 1, nombre: 'Andres', apellido: 'Villa' },
    { id: 2, nombre: 'Pepito', apellido: 'Villa' },
    { id: 3, nombre: 'Macarena', apellido: 'Villa' },
    { id: 4, nombre: 'Natalia', apellido: 'Villa' },
    { id: 5, nombre: 'Maria', apellido: 'Villa' },
    { id: 6, nombre: 'Estuardo', apellido: 'Villa' },
    { id: 7, nombre: 'Pedro', apellido: 'Villa' },
    { id: 8, nombre: 'Paula', apellido: 'Villa' },
  ];


  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(id: number) {
    console.log(id);
    return this.getUsuarios().find( usuario => usuario.id == id) ;
//    return this.getUsuarios().find( predicate usuario => usuario.id == id);

  }

}
