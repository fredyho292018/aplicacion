import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Modulos
import { PagesModules } from './pages/pages.module';
// Rutas
import { APP_ROUTES } from './app.routes';
import { ServService } from './servicios/serv.service';
import { ServiciosComponent } from './components/servicios/servicios.component';
// services


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
