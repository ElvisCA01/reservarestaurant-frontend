import {Component, OnInit, ViewChild} from '@angular/core';
import {tables} from "../../models/tables";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AdminBookingService} from "../../services/admin-booking.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";




@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.scss']
})
export class AdminBookingComponent implements OnInit {
  listTables: tables[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'personas', 'evento','fecha','horario','acciones'];
  dataSource: MatTableDataSource<any>;

  form: FormGroup;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _tablesService:AdminBookingService, private _snackBar: MatSnackBar, private router:Router, private fb:FormBuilder) {
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
    this.cargarTables();
  }

  cargarTables(){
    this.listTables = this._tablesService.getTables();
    this.dataSource = new MatTableDataSource(this.listTables);
  }
  eliminarTable(index:number){
    this._tablesService.eliminarTableS(index);
    this.cargarTables();
    this._snackBar.open('Reserva Eliminada','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }
  eliminarAllTables(index:number){
      this._tablesService.eliminarAllTableS(index);
      this.cargarTables();
  }
  getTable(index:tables){
    this._tablesService.getTableS(index);
    console.log(index)
    this.router.navigate(['/watchBooking']);

  }

  editTable(index:tables){
    this.router.navigate(['/editBooking'])
    this._tablesService.getTableS(index);
    this.router.navigate(['/editBooking'])

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
