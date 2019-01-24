import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServicioComponent } from './servicio/servicio.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'servicios/:clasificacion', component: ServiciosComponent  },
            { path: 'servicio/:id', component: ServicioComponent },
            { path: 'contactos', component: ContactosComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }];

export const PAGES_ROUTES = RouterModule.forChild( appRoutes );
