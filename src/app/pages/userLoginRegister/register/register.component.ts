import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../services/login/login-service.service";
import {RegisterServiceService} from "../../../services/register/register-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  }

  constructor(private registerService:RegisterServiceService) { }

  formSubmit(){
    if(this.user.username == '' || this.user.username == null){
      alert("El nombre de usuario es requerido");
      return;
    }
    this.registerService.añadirUsuario(this.user)
      .subscribe(res=>{
        Swal.fire(
          'Registrado Correctamente',
          'Gracias!',
          'success'
        ) },error => {
        console.log(error);
      })
  }

  ngOnInit(): void {
  }

}
