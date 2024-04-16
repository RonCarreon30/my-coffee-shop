import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginWithEmail() {
    console.log('Login with Email');
  }

  loginWithFacebook() {
    console.log('Login with Facebook');
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }
}
