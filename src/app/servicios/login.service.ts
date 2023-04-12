
import { Injectable } from '@angular/core';
import { UserLogin } from '../modelos/user-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  enviarLogin(user:UserLogin):Observable<boolean>{
    return this.http.post<boolean>("http://localhost:8080/login",user);
  }
}
