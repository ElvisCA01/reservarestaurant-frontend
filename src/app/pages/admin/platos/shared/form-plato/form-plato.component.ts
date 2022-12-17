import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SharedPlatoService} from '../shared.plato.service';
import { Router } from '@angular/router';
import {Plato} from '../../../../../classes/plato/plato.model';

@Component({
  selector: 'app-form-plato',
  templateUrl: './form-plato.component.html',
  styleUrls: ['./form-plato.component.scss']
})
export class FormPlatoComponent implements OnInit {

  form: FormGroup;
  categoria: any[] = ['Entradas','Jugos','Platos a la carta','Postres','Gaseosas','Sopas','Mariscos'];

  @Input() plato: Plato = new Plato();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: SharedPlatoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      categoria: [this.plato.categoria, [Validators.required, Validators.minLength(3),
          Validators.maxLength(60)]],
      nombre: [this.plato.nombre, [Validators.required]],
      price: [this.plato.price, [Validators.required, Validators.min(1)]],
    });
  }

  save(){
    this.onSubmit.emit(this.form.value),
    console.log(this.form.value);
  }

}
