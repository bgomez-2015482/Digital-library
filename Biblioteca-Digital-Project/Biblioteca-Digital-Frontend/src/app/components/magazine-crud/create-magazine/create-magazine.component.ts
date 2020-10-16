import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { MagazineModel } from '../../../models/magazine.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-magazine',
  templateUrl: './create-magazine.component.html',
  styleUrls: ['./create-magazine.component.css']
})
export class CreateMagazineComponent implements OnInit {
  magazine: MagazineModel;
  titularAlerta:string='';
  constructor(private rest: UserService, private router: Router) {
    this.magazine = new MagazineModel('','','','','',null,'','',null,null);
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.magazine);
    if(this.magazine.author != '' &&
    this.magazine.title != '' &&
    this.magazine.edition != '' &&
    this.magazine.description != '' &&
    this.magazine.frecuency != '' &&
    this.magazine.ejemplares != null &&
    this.magazine.themes != '' &&
    this.magazine.keywords != '' &&
    this.magazine.copies != null &&
    this.magazine.avaliable != null){
      this.rest.createMagazine(this.magazine).subscribe((res:any)=>{
        if(res.message){
          alert(res.message);
        }else if(res.magazine){
          swal.fire('Revista creada correctamente con titulo: ', res.magazine.title, 'success').then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('magazines');
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
