import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user/user.service';
import swal from 'sweetalert2';
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-terciary-page',
  templateUrl: './terciary-page.component.html',
  styleUrls: ['./terciary-page.component.css']
})
export class TerciaryPageComponent implements OnInit {
<<<<<<< HEAD
  magazines = [];
  user;
  token = localStorage.getItem('token');
  titularAlerta:string='';

  constructor(private router: Router, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {

    this.getMagazines();

    if(this.token == undefined){
      swal.fire('No tienes permisos para estar aqui', this.titularAlerta, 'error');
      this.router.navigateByUrl('home');
    }else if(this.token != undefined){
      console.log('Si tienes permiso para estar acá');
    }
    console.log(this.user);
  }

  getMagazines(){
    this.userService.getMagazines().subscribe(res => {
      this.magazines = res.magazines;
      console.log(this.magazines);
    })
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}
