import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Plato} from '../../../../classes/plato/plato.model';
import {SharedPlatoService} from '../shared/shared.plato.service'

@Component({
  selector: 'app-new-plato',
  templateUrl: './new-plato.component.html',
  styleUrls: ['./new-plato.component.scss']
})
export class NewPlatoComponent implements OnInit {

  constructor(private service: SharedPlatoService, private router:Router) { }

  ngOnInit(): void {
  }

  addPlato(plato:Plato){
    this.service.addPlato(plato).subscribe(() => {
      this.router.navigate(['plato'])
    }),
    (err:any) => {}
  }

}
