import { NgModule } from '@angular/core';

// primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';//esto es para usar la card
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }

