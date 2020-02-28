import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {
  listado = [
    { texto: 'Demos', componente: DemosComponent},
    { texto: 'Inicio', componente: HomeComponent },
  ];
  seleccionado = this.listado[0].componente;

  constructor() { }

  cambia(index: number) {
    this.seleccionado = this.listado[index].componente;
  }
  ngOnInit(): void {
  }

}
