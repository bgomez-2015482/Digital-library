import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
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
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  login(dataUser){
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
