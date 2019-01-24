
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServService {
  private clasifi: ClasificacionI [] = [
    {
      clasificacion: 'Packs',
      titulo: 'Mallorca DS Concierge Packs',
      id: 1
    },
     {
      clasificacion: 'Services',
      titulo: 'Mallorca DS Concierge Free Time Services',
      id: 2
     },
     {
      clasificacion: 'Services',
      titulo: 'Mallorca DS Concierge Free Time Services',
      id: 3
     },
     {
      clasificacion: 'Services',
      titulo: 'Mallorca DS Concierge Comprehensive Security System Services',
      id: 4
     }
  ];

  private dslista: ServeI [] = [
    {
      titulo: 'Mallorca DS Concierge Fun Pack',
      descripcion: 'Our exclusive packs are designed to have the best experiences without worries.',
      firma: 'DS Team.',
      imagen: ['fun_1920.png'],
      tituloActividades: 'Fun Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['As catering and boats, catering is offered with exclusive food and drink to your liking', 'Hostesses and dancers', 'DJ’s'] ,
      video: ['ds-concierge-mallorca.mp4'],
      id: 1,
     clasificacionid: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Sport Pac',
      descripcion: 'We are at your disposal during the entire stay.',
      firma: 'DS Team.',
      imagen: ['sport_1920.png'],
      tituloActividades: 'Sport Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['Bicycles Rental', 'Jet Sky Rent', 'Routes organized to your liking', 'Personal trainer', 'Golf course reservations', 'Tennis Court Reservations', 'Organization of diving and reserve of equipment, routes and instructor'],
      video: [],
      id: 2,
      clasificacionid: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Relax & Spa Pack',
      descripcion: 'Contact us if you want another type of service or to create a custom pack',
      firma: 'DS Team.',
      imagen:  ['relax_1920.png', 'pack-relax-2-300x200.png', 'pack-relax-1-300x200.png'],
      tituloActividades: 'Relax & Spa Pack Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['Hairdresser', 'Make-up artist', 'Manicure and pedicure', 'Everything at home or where you tell us', 'Spa and massage reserve to relax body and mind'],
      video: [''],
      id: 3,
      clasificacionid: this.clasifi[1]
    },
    {
      titulo: 'Mallorca DS Concierge Restaurant Services',
    // tslint:disable-next-line:max-line-length
      descripcion: 'We recommend and organize visits to the hairdresser and beauty salon of the gym according to the locality, quality and offers.',
      firma: 'DS Team.',
      imagen: ['camareros-1.jpeg'],
      tituloActividades: 'Restaurant Recommendation and Reservation Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['The best recommendations and reservations in the best restaurants in Mallorca', 'Without you worrying about where to go and which to choose'],
      video: [''],
      id: 4,
     clasificacionid: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Catering Organization Services at Home and Boats',
      descripcion: 'We take care of the private organization.',
      firma: 'DS Team.',
      imagen: ['catering-1.jpeg'],
      tituloActividades: 'Catering Services',
      actividades: ['House & Boat Catering Services', 'Personal Chef', 'The Best Food & Drinks to your liking', 'Staff Included'],
      video: [''],
      id: 5,
      clasificacionid: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Waiters Services',
      descripcion: 'Or contracting personal trainer to your private home or the boat.',
      firma: 'DS Team.',
      imagen: ['camareros-1.jpeg'],
      tituloActividades: 'Waiter Services',
      actividades: ['Hiring waiters and hostesses', 'On your boat, your house or private events'],
      video: [''],
      id: 6,
      clasificacionid: this.clasifi[2]
    },
    {
      titulo: 'Mallorca DS Concierge Maintenance House Services',
      descripcion: 'We’ll do the surcharges like simple quality dry cleaning, florist and food purchases.',
      firma: 'DS Team.',
      imagen: ['camareros-1.jpeg'],
      tituloActividades: 'Maintenance House Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['Inside and Outside House Maintenance', 'Appliance Maintenance', 'Comprehensive Cleaning', 'Garden & Pool Maintenance', 'Shopping at Supermarkets'],
      video: [''],
      id: 7,
      clasificacionid: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Maintenance Boat Services',
      // tslint:disable-next-line:max-line-length
      descripcion: 'Included from the boat cleaning or your own house, arrangements and maintenance service, up to watch or take your pet out for a walk.',
      firma: 'DS Team.',
      imagen: ['no-fount.jpeg'],
      tituloActividades: 'Maintenance Boat Services',
      actividades: ['Boat cleaning', 'Maintenance', 'Captain with license'],
      video: [''],
      id: 8,
      clasificacionid: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['no-fount.jpeg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['Hire a trustworthy babysitter', 'DS concierge offers the easiest and most direct way to find babysitters in mallorca', 'Insurance', 'Assured Privacy', 'We offer child care and prepare fun events'],
      video: [''],
      id: 9,
      clasificacionid: this.clasifi[3]
    },
    {
      titulo: 'Mallorca DS Concierge Babysitter Services',
      descripcion: 'We organize services babysitter, visits to doctors or hospitals.',
      firma: 'DS Team.',
      imagen: ['guardaespaldas.jpeg'],
      tituloActividades: 'Babysitter Services',
      // tslint:disable-next-line:max-line-length
      actividades: ['Hire a trustworthy babysitter', 'DS concierge offers the easiest and most direct way to find babysitters in mallorca', 'Insurance', 'Assured Privacy', 'We offer child care and prepare fun events'],
      video: [''],
      id: 10,
      clasificacionid: this.clasifi[4]
    }
];


   constructor() {
    console.log('servicio listo para usar!!!');
    }
    getClasificacion() {
      return this.clasifi;
    }
    getDsLista() {
      return this.dslista;
    }

}
export interface ServeI {

    titulo: string ;
    descripcion: string;
    firma: string;
    imagen: string[];
    tituloActividades: string;
    actividades: string[];
    video: string[];
    id: number;
    clasificacionid: ClasificacionI;
}
export interface ClasificacionI {
  clasificacion: string;
  titulo: string;
  id: number;
}

