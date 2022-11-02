import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {timeout} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb:FormBuilder, private titulo:Title, private _snackBar: MatSnackBar, private router: Router) {
    titulo.setTitle("Login")
    this.form = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    })

  }

  ngOnInit(): void {
  }


  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario=='admin' && password=='admin123' || usuario=='usuario' && password=='123'){
        this.fakeLoading();
    }else {
        this.error();
        this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }

  fakeLoading(){



    this.loading = true;
    setTimeout(()=>{

      //redireccionamos a la pagina principal
      this.router.navigate(['Principal']);
      this.loading=false;
    }, 1500)
  }

}
