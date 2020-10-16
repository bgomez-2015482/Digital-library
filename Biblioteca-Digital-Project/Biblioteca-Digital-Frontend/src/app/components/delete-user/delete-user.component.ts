import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users = [];
  user;

  constructor(private userService: UserService) { 
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res.users;
      console.log(this.users);
    })
  }

  deleteUser(){
    this.userService.deleteUser(this.user._id).subscribe((res:any)=>{
      if(res.message){
        localStorage.clear();
        alert('Cuenta de usuario eliminada');
      }else{
        alert('Error al eliminar cuenta');
      }
    })
  }

}
