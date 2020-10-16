import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  users = [];
  //search;
  user;
  token = localStorage.getItem('token');
  titularAlerta:string='';
  constructor(private router: Router, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {

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
  }

}
