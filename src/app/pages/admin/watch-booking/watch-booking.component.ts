import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminBookingService} from "../../../services/admin/admin-booking.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Reserva } from 'src/app/classes/reserva/reserva.model';
import {Location} from "@angular/common";

@Component({
  selector: 'app-watch-booking',
  templateUrl: './watch-booking.component.html',
  styleUrls: ['./watch-booking.component.scss']
})
export class WatchBookingComponent implements OnInit {

  public lista: string[];
  private id:number;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['id','categoria','nombre','precio', 'cantidad', 'total'];

  constructor(private location:Location,public service: AdminBookingService ,private activeRoute:ActivatedRoute,private _snackBar: MatSnackBar,private fb:FormBuilder, private _snackbar:MatSnackBar,private router:Router) {

    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.service.get(this.id).subscribe((data:any)=>{
        this.lista = data?.body.items;
        this.dataSource = new MatTableDataSource(this.lista);
        console.log(this.lista);
      });
   })
  }

  ngOnInit(): void {

  }

  back():void{
    this.location.back();
  }
}
