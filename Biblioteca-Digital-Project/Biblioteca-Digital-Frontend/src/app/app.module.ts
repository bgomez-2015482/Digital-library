import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NofFoundComponent } from './components/nof-found/nof-found.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { SecundaryPageComponent } from './components/secundary-page/secundary-page.component';
import { TerciaryPageComponent } from './components/terciary-page/terciary-page.component';
import { CreateBookComponent } from './components/book-crud/create-book/create-book.component';
import { EditBookComponent } from './components/book-crud/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/book-crud/delete-book/delete-book.component';
import { CreateMagazineComponent } from './components/magazine-crud/create-magazine/create-magazine.component';
import { EditMagazineComponent } from './components/magazine-crud/edit-magazine/edit-magazine.component';
import { DeleteMagazineComponent } from './components/magazine-crud/delete-magazine/delete-magazine.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NofFoundComponent,
    PrincipalPageComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    SecundaryPageComponent,
    TerciaryPageComponent,
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    CreateMagazineComponent,
    EditMagazineComponent,
    DeleteMagazineComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
