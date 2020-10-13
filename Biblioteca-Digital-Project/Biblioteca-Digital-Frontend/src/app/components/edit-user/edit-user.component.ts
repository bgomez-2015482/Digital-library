import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from "src/app/services/user/user.service";
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
<<<<<<< HEAD
  user;

  constructor(private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
=======

  constructor() { }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(){
    this.userService.updateUser(this.user).subscribe((res: any)=>{
      if(res.user){
        localStorage.setItem('user', JSON.stringify(res.user));
        alert('Usuario actualizado exitosamente');
      }else{
        alert('Error al actualizar tus datos, intenta de nuevo más tarde o ponte en contacto con soporte');
      }
    })
  }

=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}
