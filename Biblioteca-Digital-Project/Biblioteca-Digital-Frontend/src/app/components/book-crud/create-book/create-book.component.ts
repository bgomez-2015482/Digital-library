import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { UserService } from 'src/app/services/user/user.service';
import swal from 'sweetalert2';
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
<<<<<<< HEAD
  book: BookModel;
  titularAlerta:string='';

  constructor(private rest: UserService, private router: Router) {
    this.book = new BookModel('', '', '', '', '', '', null, null);
  }
=======

  constructor() { }
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit() {
    console.log(this.book);
    if (this.book.author != '' &&
      this.book.title != '' &&
      this.book.edition != '' &&
      this.book.keywords != '' &&
      this.book.description != '' &&
      this.book.themes != '' &&
      this.book.copies != null &&
      this.book.avaliable != null) {
      this.rest.createBook(this.book).subscribe((res: any) => {
        if (res.message) {
          alert(res.message)
        } else if (res.book) {
          swal.fire('Libro creado correctamente con titulo: ', res.book.title, 'success').then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('books');
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

=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}
