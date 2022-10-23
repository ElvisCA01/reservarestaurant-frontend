import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {



  constructor(private titulo:Title) {
      titulo.setTitle('Pagina principal')
  }

  ngOnInit(): void {
  }

}
