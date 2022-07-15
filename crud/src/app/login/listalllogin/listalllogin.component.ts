import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';


@Component({
  selector: 'app-listalllogin',
  templateUrl: './listalllogin.component.html',
  styleUrls: ['./listalllogin.component.css']
})
export class ListallloginComponent implements OnInit {
  public url: string = "http://localhost:9090/rest/listLogin?format=json";
  logins: any;

  constructor(private http: HttpClient, private router: Router){} //, private service:LoginserviceService) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => this.displayData(data));
    // this.logins=this.service.getLoginsList();  //need to fix service
  }

  displayData(data: any) {
    this.logins = data;
  }
  
  loginDetails(id: number) {
    this.router.navigate(['/login/showlogin', {id}]);
  }
  
  updateLogin(id: number) {
    alert("ID "+id);
    this.router.navigate(['/login/editlogin', {id}]);
  }

  deleteLogin(id: number) {
    this.router.navigate(['/login/deletlogin', {id}]);
  }
}


