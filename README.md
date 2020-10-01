Rutas para el acceso de cada componente:

seguido de localhost:4200/

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
