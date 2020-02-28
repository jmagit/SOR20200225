import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento = {};

  constructor() { }

  ngOnInit(): void {
  }

  cargar() {
    this.elemento = { id: 1, nombre: 'Lentejas', descripcion: 'Si quieres las tomas...', precio: 1.2 };
  }

  enviar() {
    window.alert('Formulario enviado')
    // ...
  }
}
