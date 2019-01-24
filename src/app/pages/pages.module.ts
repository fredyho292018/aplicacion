import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { BrowserModule } from '@angular/platform-browser';
import { ContactosComponent } from './contactos/contactos.component';
import { ServicioComponent } from './servicio/servicio.component';
import { AyudaComponent } from './ayuda/ayuda.component';



@NgModule({
 declarations: [
    PagesComponent,
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    ServiciosComponent,
    ContactosComponent,
    ServicioComponent,
    AyudaComponent
 ],
 exports: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    ServiciosComponent
 ],
 imports: [
   BrowserModule,
   SharedModule,
   PAGES_ROUTES
 ],
 providers: [],
})
export class PagesModules { }
