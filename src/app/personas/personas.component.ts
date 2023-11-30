import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas',
  //standalone: true,
  //imports: [CommonModule],
  template: `<h1>Listado de personas!</h1>
  <app-persona></app-persona>
  <app-persona></app-persona>`
})
export class PersonasComponent {

}
