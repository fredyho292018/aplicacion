import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const appRoutes: Routes = [
    { path: 'serv', component: ServiciosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );


// import { Routes, RouterModule } from '@angular/router';
// import { ServiciosComponent } from './components/servicios/servicios.component';


// const APP_ROUTES: Routes = [
//     { path: 'servicios', component: ServiciosComponent },
//     { path: '**', pathMatch: 'full', redirectTo: 'servicios' }
// ];


// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES) ;