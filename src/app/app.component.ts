import { Component } from '@angular/core';//Define componentes en Angular
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';//Muestra las vistas asociadas a las rutas en la aplicación

@Component({
  selector: 'app-root',//Nombre del componente
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',//Define el archivo html
  styleUrl: './app.component.css'//Define el archivo de estilos basado en el html
})
export class AppComponent {
  titulo = 'Hola mundo desde angular';//Atributo y valor

}
