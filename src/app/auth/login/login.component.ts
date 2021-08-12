import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: { username: string; password: string; };
  msg: string;
  constructor(private route : Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  OnLoginFormSubmit() {
    this.user = {
      username : this.loginForm.value.username,
      password : this.loginForm.value.password
    }
    if(this.user.username =='harry' && this.user.password=='potter'){
      // save the username in local storage
      window.sessionStorage.setItem("username",this.user.username);
      window.sessionStorage.setItem("isLoggedIn", "true");
      this.route.navigateByUrl('/');
    }else{
      this.msg="Invalid credentials";
      window.sessionStorage.removeItem("username");
      window.sessionStorage.removeItem("isLoggedIn");
    }
  }
}
