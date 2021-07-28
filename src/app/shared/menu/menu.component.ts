import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]= [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'pies de angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'textos y fechas',
            icon:'pi pi-aling-left',
            routerLink:'/'
          },
          {
            label:'numeros',
            icon:'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label:'no comunes',
            icon:'pi pi-globe',
            routerLink:'no-comunes'
          }]
      },
      {
            label:'pipes personalizados',
            icon:'pi pi-cog'
      }
      ];

  }

}
