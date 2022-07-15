import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-deletelogin',
  templateUrl: './deletelogin.component.html',
  styleUrls: ['./deletelogin.component.css']
})
export class DeleteloginComponent implements OnInit {

  id: number = 0;
  login: Login = new Login();

  url: string = "";
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    alert(this.id);
    if (this.id == 0 || this.id == undefined) {
      // alert("Wrong Id : " + this.id);
      this.router.navigate(['/login/listlogin']);
    }

    if (this.id >= 1001) {
      this.url = "http://localhost:9090/rest/showLogin/" + this.id + "?format=json"
    }  
    //`${this.url}/${id}`
    this.http.get<Login>(`${this.url}`).subscribe(data => {
      this.login = data;
    }, error => console.log(error));
  }

  onSubmit() {
    // alert("sumitted!");
  
    this.url = "http://localhost:9090/rest/delete/" + this.id + "?mediaType=json";
    // alert("URL :: "+this.url);

    this.http.delete(`${this.url}`).subscribe(data => {
      this.router.navigate(['/login/listlogin']);
    }
      , error => console.log(error));
      this.router.navigate(['/login/listlogin']);
  }

}
