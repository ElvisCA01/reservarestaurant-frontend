import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../services/login/login-service.service";
import {RegisterServiceService} from "../../../services/register/register-service.service";

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
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert("El nombre de usuario es requerido");
      return;
    }
    this.registerService.añadirUsuario(this.user)
      .subscribe(res=>{
        console.log(res);
        alert('Usuario guardado con exito!');
      },error => {
        console.log(error);
      })
  }

  ngOnInit(): void {
  }

}
