import { Component, OnInit } from '@angular/core';
import { SWService } from '../swservices';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private swService: SWService) { } 

  ngOnInit() {
     
     
  }

  login() {
      this.loading = true;
      this.swService.checkUser(this.model.username)
          .subscribe(
              data => {
                if(data[0].birth_year === this.model.password){
                  this.router.navigateByUrl('/planets');
                  localStorage.setItem('currentuser',data[0].name);
                }else{
                  alert('Please enter correct password');
                  this.loading = false;
                }
                  
              },
              error => {
                alert('wrong user');
                  this.loading = false;
              });
  }

}
