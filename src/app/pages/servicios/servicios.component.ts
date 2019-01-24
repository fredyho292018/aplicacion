import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeconsergueService, ClasificacionI, ServeI } from 'src/app/services/serveconsergue.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
   serv: ServeI[] = [];
   constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router ) {
  }
  verServicio( i: number) {
    this.ro.navigate(['/servicio', i]);
  }
  ngOnInit() {
    this._activatedRoute.params.subscribe(parans => {
      console.log(parans['clasificacion']);
        this.serv = this._serveconsergueService.getDsListaClasificacion(parans['clasificacion']);
    });

    // // this.serv = this._serveconsergueService.getDsLista();
    //    this.serv = this._serveconsergueService.getDsListaClasificacion('Services');
    //  // this.serv = this._serveconsergueService.getDsListaClasificacion('Packs');
    //  console.log(this.serv);
  }

}
