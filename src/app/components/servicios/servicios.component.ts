import { Component, OnInit } from '@angular/core';
import { ServService, ClasificacionI, ServeI } from 'src/app/servicios/serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
   listaServ: ServeI[] = [];
   listaClas: ClasificacionI[] = [];
  constructor(private ser: ServService, private rou: Router) { }

  ngOnInit() {
    this.listaServ = this.ser.getDsLista();
    this.listaClas = this.ser.getClasificacion();
  }

}
