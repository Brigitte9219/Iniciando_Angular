import { Component } from '@angular/core';//Define componentes en Angular
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';//Muestra las vistas asociadas a las rutas en la aplicación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primera app en angular';
  saludo = 'Saludos desde Angular'
}
