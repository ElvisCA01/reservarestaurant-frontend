import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Plato} from '../../../../classes/plato/plato.model';
import {SharedPlatoService} from '../shared/shared.plato.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-plato',
  templateUrl: './list-plato.component.html',
  styleUrls: ['./list-plato.component.scss']
})
export class ListPlatoComponent implements OnInit {

  public formularios: Array<Plato> = [];
  displayedColumns: string[] = ['id','categoria','nombre','precio','acciones'];
  dataSource: MatTableDataSource<Plato>;

  constructor(private service: SharedPlatoService, private router:Router,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getPlatos();
  }

  getPlatos() {
    this.service.getPlato().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar la mascota?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.service.deletePlato(id).subscribe(()=>{
          this.getPlatos();
        })
        Swal.fire(
          'Eliminado!',
          'Eliminaste la mascota.',
          'success'
        ).then(okay =>{
          if(okay){
            window.location.reload();
          }
        })
      }
    })
  }
}
