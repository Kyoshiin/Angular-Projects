import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-showlogin',
  templateUrl: './showlogin.component.html',
  styleUrls: ['./showlogin.component.css']
})
export class ShowloginComponent implements OnInit {
  login: Login = new Login();
  id: number = 0;
  url: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // alert("Show ID : " + this.id);
    this.url = "http://localhost:9090/rest/showLogin/" + this.id + "?format=json";
    // alert("URL : " + this.url);
    this.http.get(this.url).subscribe((data) => this.displayData(data));
  }
  displayData(data: any) {
    this.login = data;
  }
}
