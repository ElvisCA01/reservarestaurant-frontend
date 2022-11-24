import {Component, OnInit, resolveForwardRef} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {timeout} from "rxjs";
import {Router} from "@angular/router";
import {LoginServiceService} from "../../../services/login/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;


  loginData = {
    username : '',
    password : ''
  }




  constructor(private fb:FormBuilder, private titulo:Title, private _snackBar: MatSnackBar, private router: Router, private loginService:LoginServiceService) {
    titulo.setTitle("Login")

  }

  ngOnInit(): void {
  }


  formSubmit(){
    console.log('Click')
    if(this.loginData.username.trim() == '' || this.loginData.password.trim() == null){
      this._snackBar.open('El nombre de usuario es requerido !!','Aceptar',{
        duration: 3000
      })
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this._snackBar.open('La contraseña es requerida !!','Aceptar',{
        duration: 3000
      })
      return;
    }
    this.loginService.generateToken(this.loginData)
      .subscribe((data:any)=>{
        console.log(data);
          this.loginService.loginUser(data.token);
          this.loginService.getCurrentUser()
            .subscribe((user:any)=>{
              this.loginService.setUser(user);
              console.log(user);

              if(this.loginService.getUserRole() == "ADMIN"){
                //Mostraremos el dashboard del admin
                this.router.navigate(['admin'])
                this.loginService.loginStatusSubject.next(true);
              }else if(this.loginService.getUserRole() == "NORMAL"){
                //Mostraremos el dashboard del usuario
                this.router.navigate(['user-dashboard'])
                this.loginService.loginStatusSubject.next(true);
              }
              else {
                this.loginService.logout();
              }
            })
      },(error) =>{
              console.log(error);
              this._snackBar.open('Detalles invalidos, intentalo de nuevo!', "Aceptar",{
                duration:3000
              })
           }
        )
    }




  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'admin123' || usuario == 'usuario' && password == '123') {
      this.fakeLoading();
    } else {
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
      this.router.navigate(['/Principal']);
      this.loading=false;
    }, 1000)
  }

}
