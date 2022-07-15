import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/model/login';
 

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  login: Login = new Login();
  public url: string = "http://localhost:9090/rest/saveLogin?format=json";

  constructor( private http: HttpClient, private router: Router) { }
  ngOnInit() {
  }
    // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  onSubmit() {
    console.log(this.login);
    this.http.post(`${this.url}`, this.login).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login/listlogin']);
    },
      error => console.log(error));
      this.router.navigate(['/login/listlogin']);
  }

}
