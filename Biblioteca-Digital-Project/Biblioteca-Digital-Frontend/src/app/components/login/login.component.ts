import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/services/user/user.service";
<<<<<<< HEAD
import swal from 'sweetalert2';
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin
<<<<<<< HEAD
  titularAlerta:string='';
  constructor(private rest: UserService, private router: Router) {
    this.userLogin = {
=======
  constructor(private rest: UserService, private router: Router) {
    this.userLogin = {
      email: '',
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
      name: '',
      password: '',
      getToken: 'true'
    }
  }
  ngOnInit(): void {
  }
<<<<<<< HEAD
  

  onSubmit() {
      if (this.userLogin.name != '') {
=======

  onSubmit() {
      if (this.userLogin.name != '' || this.userLogin.email) {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
        if (this.userLogin.password != '') {
          this.rest.login(this.userLogin).subscribe((res: any) => {
            if (res.message) {
              alert(res.message)
            } else if (res.token) {
<<<<<<< HEAD
              swal.fire('Bienvenido ', res.user, 'success');
              localStorage.setItem('token', res.token);
=======
              alert('Bienvenido ' + res.user);
              localStorage.setItem('token', res.token);
              localStorage.setItem('role', JSON.stringify(res.role));
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
              res.password = '';
              localStorage.setItem('user', JSON.stringify(res.user));
              this.router.navigateByUrl('overview');
            } else {
              alert('Ha ocurrido un error desconocido')
            }
          })
        } else {
<<<<<<< HEAD
          swal.fire('Debes ingresar la contraseña', this.titularAlerta, 'warning');
        }
      } else {
        swal.fire('Ingresa los datos de autenticación', this.titularAlerta, 'warning');
=======
          alert('Ingresa la contraseña')
        }
      } else {
        alert('Ingresa los datos de autenticación')
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
      }
  }
}
