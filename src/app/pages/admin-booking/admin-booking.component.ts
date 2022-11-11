import {Component, OnInit, ViewChild} from '@angular/core';
import {tables} from "../../models/tables";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AdminBookingService} from "../../services/admin-booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {MatDialog,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogComponent} from "../../UI/dialog/dialog.component";

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.scss']
})
export class AdminBookingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'personas', 'evento','fecha','horario','acciones'];
  dataSource!: tables[];
  @ViewChild(MatPaginator) _paginator!:MatPaginator;
  @ViewChild(MatSort) _sort!:MatSort;
  finalData:any
  form: FormGroup;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _snackbar:MatSnackBar,private dialog: MatDialog,private titulo:Title,private _tablesService:AdminBookingService, private _snackBar: MatSnackBar, private router:Router, private fb:FormBuilder,private api:AdminBookingService) {
    this.titulo.setTitle('CRUD Administación')
    this.form = this.fb.group({
      id: ['',Validators.required, Validators.pattern("[0-9]")],
      nombre: ['',Validators.required],
      evento: ['',Validators.required],
      personas: ['',Validators.required],
      fecha: ['',Validators.required],
      horario: ['',Validators.required],
    })
  }



  ngOnInit(): void {
    this.CargarBookings();
  }


  openDialog(id:any) {
   const _dialog = this.dialog.open(DialogComponent,{
     width:'60%',
     data:{
       id:id
     }
   })
    _dialog.afterClosed().subscribe(r=>{
      this.CargarBookings();
    })
  }

  CargarBookings(){
    this.api.getBookings().subscribe(response=>{
      this.dataSource=response;
      this.finalData=new MatTableDataSource<tables>(this.dataSource);
      this.finalData.paginator=this._paginator;
      this.finalData.sort=this._sort;
    })
  }

  editBooking(id:any){
    this.openDialog(id);
  }

  removeBooking(id:any){
    this.api.removeBookingById(id)
      .subscribe(r=>{
        this._snackbar.open('Usuario eliminado'),'',{
          duration:1500,
          horizontalPosition: 'Center',
          verticalPosition: 'bottom'
        }
        this.CargarBookings();
      })
  }
  ngAfterViewInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.finalData.filter = filterValue.trim().toLowerCase();
  }
}
