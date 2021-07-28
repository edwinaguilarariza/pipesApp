import { Component,  } from '@angular/core';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
nombreLower: string = 'edwin';
nombreUper: string= 'EDWIN';
nombreCompleto: string = 'EdWiN AgUiLaR';
 
fecha: Date = new Date();

}
