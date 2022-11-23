import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  constructor(private titulo:Title) {
    titulo.setTitle('Nosotros')
  }

  ngOnInit(): void {
  }

}
