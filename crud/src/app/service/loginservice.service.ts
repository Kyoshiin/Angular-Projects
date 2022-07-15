//holds the urls -- 
//TODO:  not working

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../model/login';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url: string = "";
  logins: any = [];
  private baseURL = "http://localhost:9090/rest";
  constructor(private http: HttpClient) { }
  getLoginsList(): Observable<Login[]> {
    this.url = `${this.baseURL}` + "/listLogin?format=json";
    alert(this.url);
    this.logins = this.http.get<Login[]>(this.url);
    alert(JSON.stringify(this.logins));
    return this.http.get<Login[]>(this.url);
  }
  getLoginById(id: number): Observable<Login> {
    return this.http.get<Login>(`${this.baseURL}` + "/showlogin/" + `/${id}` + "?format=json");
  }
  createLogin(login: Login): Observable<Object> {
    return this.http.post(`${this.baseURL}` + "/saveLogin?format=json", login);
  }
  updateLogin(id: number, login: Login): Observable<Object> {
    return this.http.patch(`${this.baseURL}` + "/update/" + `/${id}` + "?format=json", login);
  }
  deleteLogin(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}` + "/delete/" + `/${id}` + "?format=json");
  }
}