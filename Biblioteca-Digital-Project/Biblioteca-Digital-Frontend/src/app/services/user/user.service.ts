import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { Observable } from "rxjs";
=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'http://localhost:3800/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
<<<<<<< HEAD

  private extractData(res: Response) {
=======
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response){
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
    let body = res;
    return body || [] || {};
  }

<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.endpoint + 'showUser', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getBooks(): Observable<any> {
    return this.http.get(this.endpoint + 'showBook', this.httpOptions).pipe(
      map(this.extractData)
    );
  }

  getMagazines(): Observable<any> {
    return this.http.get(this.endpoint + 'showMagazine', this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  /*getUser(search){
    var p = {search: search};
    var params = JSON.stringify(p);

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.post(this.endpoint + 'getUser', params, httpOptionsAuth).pipe(
      map(this.extractData)
    )
  }*/

  createUser(dataUser) {
    let params = JSON.stringify(dataUser);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.post(this.endpoint + 'createUser', params, { headers: headers }).pipe(
      map(this.extractData)
    )
  }

  createBook(dataUser) {
    let params = JSON.stringify(dataUser);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.post(this.endpoint + 'createBook', params, { headers: headers }).pipe(
      map(this.extractData)
    )
  }

  createMagazine(dataUser) {
    let params = JSON.stringify(dataUser);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.post(this.endpoint + 'createMagazine', params, {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  login(dataUser) {
=======
  login(dataUser){
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
<<<<<<< HEAD

  updateUser(dataUser) {
    let params = JSON.stringify(dataUser);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.put(this.endpoint + 'updateUser' + dataUser._id, params, { headers: headers }).pipe(
      map(this.extractData)
    )
  }

  deleteUser(id) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return this.http.delete(this.endpoint + 'deleteUser', { headers: headers }).pipe(
      map(this.extractData)
    )
  }


=======
>>>>>>> 352171d6b312f226a5642f51f4e331f20783365a
}
