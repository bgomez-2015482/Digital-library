import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './components/book-crud/create-book/create-book.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { DeleteBookComponent } from './components/book-crud/delete-book/delete-book.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditBookComponent } from './components/book-crud/edit-book/edit-book.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NofFoundComponent } from './components/nof-found/nof-found.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SecundaryPageComponent } from './components/secundary-page/secundary-page.component';
import { TerciaryPageComponent } from './components/terciary-page/terciary-page.component';
import { CreateMagazineComponent } from './components/magazine-crud/create-magazine/create-magazine.component';
import { EditMagazineComponent } from './components/magazine-crud/edit-magazine/edit-magazine.component';
import { DeleteMagazineComponent } from './components/magazine-crud/delete-magazine/delete-magazine.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { LoanBooksComponent } from './components/user-overview/loan-books/loan-books.component';
import { ReturnBooksComponent } from './components/user-overview/return-books/return-books.component';
import { LoanMagazinesComponent } from './components/user-overview/loan-magazines/loan-magazines.component';
import { ReturnMagazinesComponent } from './components/user-overview/return-magazines/return-magazines.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: PrincipalPageComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: 'editUser', component: EditUserComponent},
  {path: 'deleteUser', component: DeleteUserComponent},
  {path: 'books', component: SecundaryPageComponent},
  {path: 'magazines', component: TerciaryPageComponent},
  {path: 'createBook', component: CreateBookComponent},
  {path: 'editBook', component: EditBookComponent},
  {path: 'deleteBook', component: DeleteBookComponent},
  {path: 'createMagazine', component: CreateMagazineComponent},
  {path: 'editMagazine', component: EditMagazineComponent},
  {path: 'deleteMagazine', component: DeleteMagazineComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'userOverview', component: UserOverviewComponent},
  {path: 'loanBooks', component: LoanBooksComponent},
  {path: 'returnBooks', component: ReturnBooksComponent},
  {path: 'loanMagazines', component: LoanMagazinesComponent},
  {path: 'returnMagazines', component: ReturnMagazinesComponent},
  {path: '**', component: NofFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
