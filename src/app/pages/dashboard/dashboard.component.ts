import { Component, OnInit } from '@angular/core';
import { ServeconsergueService, ServeI } from 'src/app/services/serveconsergue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  listaService: ServeI[] = [];
  listaPacks: ServeI[] = [];
  constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router) { }

  ngOnInit() {
    this.listaService = this._serveconsergueService.getDsListaClasificacion('Services');
    this.listaPacks = this._serveconsergueService.getDsListaClasificacion('Packs');
  }
  verServicio( i: number) {
    this.ro.navigate(['/servicio', i]);
  }
}
