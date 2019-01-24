import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeconsergueService, ClasificacionI, ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private rou: Router, private ser: ServeconsergueService) { }
   lisclas: ClasificacionI[] = [];
  ngOnInit() {
   this.lisclas = this.ser.getClasificacion();
  }

}
