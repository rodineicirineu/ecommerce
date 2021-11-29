import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(user: any) {
   return this.http.post<any>(environment.serverUrl + `/auth/signin`, user)
  }

  logged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getRule(){
    return localStorage.getItem('rule')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
  }
}
