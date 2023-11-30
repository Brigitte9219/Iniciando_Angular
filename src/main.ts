import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Este código inicia la aplicación utilizando el componente principal y una configuracion especifica
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
