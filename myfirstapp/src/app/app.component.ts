import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  nombre: string;
  email: string;
  listaActividades: string[];
  showHobbie: boolean;

  constructor() {
    this.nombre = "Edwin";
    this.title = 'Practica Angular';
    this.nombre = "Edwin Zamora";
    this.email = "edzamo13@gmail.com";
    this.listaActividades = ["futbol", "basket", "natacion"];
    this.showHobbie = false;

  }
  showHobbies() {
    this.showHobbie = !this.showHobbie;
  }

  newHobby(hobby) {
    // console.log(hobby.value);
    this.listaActividades.push(hobby.value);
    hobby.value = "";
    return false;
  }
}
