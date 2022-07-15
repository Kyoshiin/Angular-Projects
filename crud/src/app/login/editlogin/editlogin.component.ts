import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-editlogin',
  templateUrl: './editlogin.component.html',
  styleUrls: ['./editlogin.component.css']
})
export class EditloginComponent implements OnInit {
  login: Login = new Login();
  id: number = 0;
  url: string = "";

  constructor(private http: HttpClient, private route :ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // alert("Show ID : " + this.id);
    this.url = "http://localhost:9090/rest/showLogin/" + this.id + "?format=json";
    // alert("URL : " + this.url);
    this.http.get(this.url).subscribe((data) => this.displayData(data));
  }
  displayData(data: any) {
    // alert(JSON.stringify(data));
    this.login = data;
  }
  onSubmit() {
    // alert("sumitted!");
  
    this.url = "http://localhost:9090/rest/update/" + this.id + "?mediaType=json";
    // alert("URL :: "+this.url);

    this.http.patch(`${this.url}`, this.login).subscribe(data => {
      this.router.navigate(['/login/listlogin']);
    }
      , error => console.log(error));
      this.router.navigate(['/login/listlogin']);
  }
}
