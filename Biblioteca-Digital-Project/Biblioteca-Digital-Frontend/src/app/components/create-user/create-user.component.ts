import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from '../../models/user.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: UserModel;
  titularAlerta:string='';
  constructor(private rest: UserService, private router: Router) {
    this.user = new UserModel('','','','','');
  }

  ngOnInit():void{

  }

  onSubmit() {
    console.log(this.user);
    if(this.user.carnet != '' &&
    this.user.name != '' &&
    this.user.surname != '' &&
    this.user.role != '' &&
    this.user.password != ''){
      this.rest.createUser(this.user).subscribe((res:any)=>{
        if(res.message){
          alert(res.message)
        }else if(res.user){
          swal.fire('Usuario creado correctamente con user: ', res.user.name, 'success').then((result)=>{
            if(result.isConfirmed){
              this.router.navigateByUrl('overview');
            }
          });
        }else{
          swal.fire('Ha ocurrido un problema, intentelo más tarde', this.titularAlerta, 'error');
        }
      })
    }else{
      swal.fire('Ingresa todos los datos para crear la cuenta ', this.titularAlerta, 'warning');
    }
  }

}
