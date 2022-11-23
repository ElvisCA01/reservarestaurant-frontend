import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AdminBookingService} from "../../../services/admin/admin-booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {MatDialog,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Reserva} from "../../../classes/reserva/reserva";

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.scss']
})
export class AdminBookingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre','papellido','sapellido', 'personas', 'evento','fecha','horario','acciones'];
  Reservas: Reserva[];
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  @ViewChild(MatSort) _sort!:MatSort;
  finalData:any
  form: FormGroup;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _snackbar:MatSnackBar,private titulo:Title,private _tablesService:AdminBookingService, private _snackBar: MatSnackBar, private router:Router, private fb:FormBuilder,private api:AdminBookingService) {
    this.titulo.setTitle('CRUD Administación')
    this.form = this.fb.group({
      id: ['',Validators.required, Validators.pattern("[0-9]")],
      nombre: ['',Validators.required],
      papellido: ['',Validators.required],
      sapellido: ['',Validators.required],
      evento: ['',Validators.required],
      personas: ['',Validators.required],
      fecha: ['',Validators.required],
      horario: ['',Validators.required],
    })
  }


  editBooking(id:number){
    this.router.navigate(['/editBooking',id]);
  }

  eliminarReserva(id:number){
    this.api.eliminarReserva(id)
      .subscribe(dato=>{
        console.log(dato);
        this.CargarReservas();
      })
  }

  CargarReservas(){
    this.api.getBookings().subscribe(dato=>{
      this.Reservas=dato;
      this.finalData=new MatTableDataSource<Reserva>(this.Reservas);
      this.finalData.paginator=this._paginator;
      this.finalData.sort=this._sort;
    })
  }


  verReserva(id:number){
      this.router.navigate(['watchBooking',id]);
  }

  ngOnInit(): void {
    this.CargarReservas();
  }



  ngAfterViewInit() {
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
}
