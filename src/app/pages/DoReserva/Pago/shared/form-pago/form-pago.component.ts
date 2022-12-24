import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PagoService} from '../pago.service';
import { Router } from '@angular/router';
import {Pago} from '../pago.model';

@Component({
  selector: 'app-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.scss']
})
export class FormPagoComponent implements OnInit {

  form: FormGroup;
  tipo: any[] = ['Visa','Mastercad'];

  @Input() pago: Pago = new Pago();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: PagoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titular: [this.pago.titular, [Validators.required, Validators.minLength(3),
          Validators.maxLength(60)]],
      tipo: [this.pago.tipo, [Validators.required]],
      numero: [this.pago.numero, [Validators.required, Validators.min(1)]],
      fechaCaducidad: [this.pago.fechaCaducidad, [Validators.required]],
      cvv: [this.pago.cvv, [Validators.required]]
    });
  }

  save(){
    this.onSubmit.emit(this.form.value),
    console.log(this.form.value);
  }

}
