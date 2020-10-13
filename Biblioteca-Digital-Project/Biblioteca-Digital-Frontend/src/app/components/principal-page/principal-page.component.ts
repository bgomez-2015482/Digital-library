import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
=======
import { UserService } from "src/app/services/user/user.service";;
import { Router } from "@angular/router";
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
<<<<<<< HEAD
  users = [];
  //search;
  user;
  token = localStorage.getItem('token');
  titularAlerta:string='';
=======
  user;
  token = localStorage.getItem('token');
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
  constructor(private router: Router, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
<<<<<<< HEAD

    this.getUsers();

      if (this.token == undefined) {
        swal.fire('No tienes permisos para estar aqui', this.titularAlerta, 'error');
        this.router.navigateByUrl('home');
      } else if (this.token != undefined) {
        console.log('Si tienes permiso para estar acá');
      }
      console.log(this.user)
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res.users;
      console.log(this.users);
    })
=======
    if (this.token == undefined) {
      alert('No tienes permisos para estar aqui');
      this.router.navigateByUrl('home');
    } else if (this.token != undefined) {
      console.log('Si tienes permiso para estar acá');
    }
    console.log(this.user)
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
  }

}
