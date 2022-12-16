import { Component, OnInit } from '@angular/core';
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
  public plato: Plato;

  constructor(public service: SharedPlatoService,
    private router:Router, public activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.service.get(this.id).subscribe((data:any)=>{
        this.plato=data?.body;
      });
   })
  }

  updatePlato(plato: Plato){
    plato.id = this.id;
    this.service.updatePlato(plato).subscribe(() => {
      this.router.navigate(['/plato'])
    })
  }

}
