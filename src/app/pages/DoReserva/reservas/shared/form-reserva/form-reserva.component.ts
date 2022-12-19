import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SharedPlatoService } from "../../../../admin/platos/shared/shared.plato.service";
import { AdminBookingService } from "../../../../../services/admin/admin-booking.service";
import { Plato } from "../../../../../classes/plato/plato.model";
import { ReservaItem } from "../../../../../classes/reserva/reserva-item.model";
import { Reserva } from "../../../../../classes/reserva/reserva.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss']
})
export class FormReservaComponent implements OnInit {

  form: FormGroup;
  platos: Plato[];
  quantity: number;

  personas: any[] = ['01','02','03','04','05','06'];
  cantidad: any[] = [1,2,3,4,5,6,7,8];
  horario: any[] = ['11:30 pm a 1:00pm','1:30 pm a 3:00 pm','3:30 pm a 5:30 pm'];

  orderLines: ReservaItem[] = [];

  myControlPlato = new FormControl();
  platosFiltrados$: Observable<Plato[]>;

  @Input() rs: Reserva = new Reserva();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(private serviceReserva: AdminBookingService,
              private servicePlato: SharedPlatoService,
              private location:Location) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      personas: new FormControl(),
      nombre: new FormControl(),
      papellido: new FormControl(),
      sapellido: new FormControl(),
      horario: new FormControl(),
      evento: new FormControl(),
      fecha: new FormControl(),
      plato: this.myControlPlato,
      quantity: new FormControl(),
    });

    this.listarPlatos();

    this.platosFiltrados$ = this.myControlPlato.valueChanges.pipe(
      map((val) => this.filtrarPlatos(val))
    );
  }

  listarPlatos() {
    this.servicePlato.getPlato().subscribe((data: any) => {
      this.platos = data;
    });
  }

  filtrarPlatos(val: any) {
    if (val != null && val.id > 0) {
      return this.platos.filter((el) =>
        el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
      );
    }

    return this.platos.filter((el) =>
      el.nombre.toLowerCase().includes(val?.toLowerCase())
    );
  }

  mostrarPlato(val: Plato) {
    return val ? `${val.nombre}` : val;
  }

  agregarPlato() {
    if (this.form.value['plato']) {
      let orderLine = new ReservaItem();
      orderLine.plato = this.form.value['plato'];
      orderLine.quantity = this.form.value['quantity'];

      this.orderLines.push(orderLine);
    }
  }

  removerPlato(index: number) {
    this.orderLines.splice(index, 1);
  }
  save() {
    let reserva = new Reserva();
    reserva.personas = this.form.value['personas'];

    var fecha = this.form.value['fecha'];
    var resFecha = fecha.split("-");
    var reversedFecha = resFecha.reverse(); 
    var fechaOb=reversedFecha.join('/');

    reserva.nombre = this.form.value['nombre'];
    reserva.papellido = this.form.value['papellido'];
    reserva.sapellido = this.form.value['sapellido'];
    reserva.horario = this.form.value['horario'];
    reserva.evento = this.form.value['evento'];
    reserva.fecha = fechaOb;
    reserva.items = this.orderLines;
    //console.log(fechaOb);
    this.onSave.emit(reserva);
  }
  back():void{
    this.location.back();
  }
}
