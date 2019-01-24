import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BrowserModule } from '@angular/platform-browser';
import { PAGES_ROUTES } from '../pages/pages.routes';


@NgModule({
 declarations: [
      HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
 ],
 exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
 ],
 imports: [
   BrowserModule,
   PAGES_ROUTES
 ],
})
export class SharedModule { }
