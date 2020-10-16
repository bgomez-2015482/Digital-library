import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/services/user/user.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin
  titularAlerta:string='';
  constructor(private rest: UserService, private router: Router) {
    this.userLogin = {
      name: '',
      password: '',
      getToken: 'true'
    }
  }
  ngOnInit(): void {
  }
  

  onSubmit() {
      if (this.userLogin.name != '') {
        if (this.userLogin.password != '') {
          this.rest.login(this.userLogin).subscribe((res: any) => {
            if (res.message) {
              alert(res.message)
            } else if (res.token) {
              swal.fire('Bienvenido ', res.user, 'success');
              localStorage.setItem('token', res.token);
              res.password = '';
              localStorage.setItem('user', JSON.stringify(res.user));
              this.router.navigateByUrl('overview');
            } else {
              alert('Ha ocurrido un error desconocido')
            }
          })
        } else {
          swal.fire('Debes ingresar la contraseña', this.titularAlerta, 'warning');
        }
      } else {
        swal.fire('Ingresa los datos de autenticación', this.titularAlerta, 'warning');
      }
  }
}
