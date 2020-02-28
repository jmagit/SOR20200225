import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { PersonasComponent } from '../personas/componente.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  listado = [
    { texto: 'Personas', componente: PersonasComponent},
    { texto: 'Inicio', componente: HomeComponent },
    { texto: 'Demos', componente: DemosComponent},
    { texto: 'Formulario', componente: FormularioComponent},
  ];
  seleccionado = this.listado[0].componente;

  constructor() { }

  cambia(index: number) {
    this.seleccionado = this.listado[index].componente;
  }
  ngOnInit(): void {
  }

}
