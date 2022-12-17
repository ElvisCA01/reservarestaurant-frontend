import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plato } from "../../../../classes/plato/plato.model";
import { SharedPlatoService } from "../shared/shared.plato.service";

@Component({
  selector: 'app-update-plato',
  templateUrl: './update-plato.component.html',
  styleUrls: ['./update-plato.component.scss']
})
export class UpdatePlatoComponent implements OnInit {

  private id: number;
  form: FormGroup;

  categoria: any[] = ['Entradas','Jugos','Platos a la carta','Postres','Gaseosas','Sopas','Mariscos'];

  constructor(public service: SharedPlatoService,
    private router:Router, public activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      console.log(this.id);
   });

   this.form = new FormGroup({
    categoria: new FormControl(),
    nombre: new FormControl(),
    price: new FormControl(),
  });
  }


  save(){
    let plato = new Plato;
    plato.id = this.id;
    plato.categoria = this.form.value['categoria'];
    plato.nombre = this.form.value['nombre'];
    plato.price = this.form.value['price'];
    console.log(plato);
    this.service.updatePlato(plato).subscribe(() => {
      this.router.navigate(['/plato']);
    }, (err: any) =>{})
  }

}
