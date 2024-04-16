import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  showMobile: boolean = false;
  showPasswordResetCode: boolean = false;
  showInput: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleInputFields() {
    this.showMobile = !this.showMobile;
  }
}
