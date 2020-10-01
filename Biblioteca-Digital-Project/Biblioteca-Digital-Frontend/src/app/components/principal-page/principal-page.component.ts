import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user/user.service";;
import { Router } from "@angular/router";

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  user;
  token = localStorage.getItem('token');
  constructor(private router: Router, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    if (this.token == undefined) {
      alert('No tienes permisos para estar aqui');
      this.router.navigateByUrl('home');
    } else if (this.token != undefined) {
      console.log('Si tienes permiso para estar acá');
    }
    console.log(this.user)
  }

}
