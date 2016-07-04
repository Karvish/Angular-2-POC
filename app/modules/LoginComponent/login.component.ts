import { Component } from '@angular/core';
import { NgForm }  from '@angular/common';
import { LoginService  } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,   
  providers: [LoginService ],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
	public email: string;
	public password: string;
	public postData: string;
	public userName: string;
	public errorTitle: string;
	public errorDesc: string;
	public successMsg: boolean = true;
	public errorMsg: boolean = true;
	public submitting: boolean = false;
	
	constructor(private loginService: LoginService , private router: Router) {}
	onSubmit() {
	    this.loginService.login(this.email, this.password);
	    
  	}	 
}
