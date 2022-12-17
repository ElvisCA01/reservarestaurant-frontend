import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger} from '@angular/animations';
import {Title} from "@angular/platform-browser";
import {Reserva} from "../../../classes/reserva/reserva.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AdminBookingService} from "../../../services/admin/admin-booking.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.scss'],
})
export class SearchBookingComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'nombre','papellido','sapellido', 'personas', 'evento','fecha','horario','total','acciones'];
  Reservas: Reserva[];
  form: FormGroup;

  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  @ViewChild(MatSort) _sort!:MatSort;
  finalData:any


  ngAfterViewInit(): void {
  }


  CargarBookings(){
    this.api.listarReservas().subscribe(dato=>{
      this.Reservas=dato;
      this.finalData=new MatTableDataSource<Reserva>(this.Reservas);
      this.finalData.paginator=this._paginator;
      this.finalData.sort=this._sort;
    })
  }


  constructor(private http:HttpClient,private _snackbar:MatSnackBar,private dialog: MatDialog,private titulo:Title,private _tablesService:AdminBookingService, private _snackBar: MatSnackBar, private router:Router, private fb:FormBuilder,private api:AdminBookingService) {
    titulo.setTitle('Busca tu reserva!')
  }

  ngOnInit(): void {
    this.CargarBookings();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
  verReserva(id:number){
    this.router.navigate(['watchBooking',id]);
  }
}
