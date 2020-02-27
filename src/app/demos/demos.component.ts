import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable;
  private nombre: string = 'mundo';
  listado = [
    { id: 1, nombre: 'Burgos'},
    { id: 2, nombre: 'SORIA'},
    { id: 3, nombre: 'valladolid'},
    { id: 4, nombre: 'leoN'},
    { id: 5, nombre: 'ZamorA'},
  ];
  idProvincia = 2;

  resultado: string = null;
  visible = true;
  estetica = { error: false, importante: true, urgente: true };

  fontsize = 24;

  constructor(public vm: NotificationService) { }

  public get Nombre() { return this.nombre; }
  public set Nombre(valor: string) { this.nombre = valor; }

  saluda() {
    this.resultado = `Hola ${this.Nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  public calcula(a: number, b: number): number {
    return a + b;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.error = !this.estetica.error;
    this.estetica.importante = !this.estetica.importante;
  }

  add(provincia: string) {
    const id = this.listado.length;
    this.listado.push({id, nombre: provincia});
    this.idProvincia = id;
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripcion: ${n.Message}`);
      // this.vm.remove(this.vm.Listado.length - 1);
      this.vm.removeById(n.Id);
    });
  }

  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }
}
