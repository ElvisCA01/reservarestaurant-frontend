import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../../../services/login/login-service.service";

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

  constructor(private userService:LoginServiceService) { }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert("El nombre de usuario es requerido");
      return;
    }
    this.userService.añadirUsuario(this.user)
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
