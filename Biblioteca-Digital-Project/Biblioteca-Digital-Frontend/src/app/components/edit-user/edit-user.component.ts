import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user;

  constructor(private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit(): void {
  }

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

}
