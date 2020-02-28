import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MySizerComponent } from './components/my-sizer.component';
import { MIS_VALIDADORES } from './directives/validadores.directive';



@NgModule({
  declarations: [ PIPES_CADENAS, MySizerComponent, MIS_VALIDADORES, ],
  exports: [ PIPES_CADENAS, MySizerComponent, MIS_VALIDADORES, ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
