import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeconsergueService, ClasificacionI, ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
    // servicioP: ServeI[] = [];
    servicioT: any = {};
  constructor(private _activatedRoute: ActivatedRoute, private serv: ServeconsergueService, private rou: Router) {
    this._activatedRoute.params.subscribe(parans => {
      console.log(parans['id']);
      // this.servicioP = serv.getDsLista();
      this.servicioT = serv.getServicio(parans['id']);
      console.log(this.servicioT);
    }
    );
   }

  ngOnInit() {
  }

}
