import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { UserService } from "src/app/services/user/user.service";
import swal from 'sweetalert2';
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-secundary-page',
  templateUrl: './secundary-page.component.html',
  styleUrls: ['./secundary-page.component.css']
})
export class SecundaryPageComponent implements OnInit {
<<<<<<< HEAD
  books = [];
  book;
  user;
  token = localStorage.getItem('token');
  titularAlerta:string='';

  constructor(private router: Router, private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.getBooks();

    if(this.token == undefined){
      swal.fire('No tienes permisos para estar aqui', this.titularAlerta, 'error');
      this.router.navigateByUrl('home');
    }else if(this.token != undefined){
      console.log('Si tienes permisos para estar acá');
    }
    console.log(this.user);
  }

  getBooks(){
    this.userService.getBooks().subscribe(res =>{
      this.books = res.books;
      console.log(this.books);
    })
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
  }

}
