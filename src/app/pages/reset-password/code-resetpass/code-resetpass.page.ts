import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-resetpass',
  templateUrl: './code-resetpass.page.html',
  styleUrls: ['./code-resetpass.page.scss'],
})
export class CodeResetpassPage implements OnInit {
  timer: number = 30;
  timerSubscription!: Subscription;
  resendDisabled: boolean = false;
  showVerifyingCodeContent: boolean = true;
  showSetPassContent: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        // When timer reaches 0, disable the resend button
        this.resendDisabled = true;
        this.timerSubscription.unsubscribe();
      }
    });
  }

  resendCode() {
    if (this.timer === 0) {
      // Reset timer to 30 seconds
      this.timer = 30;
      // Restart timer
      this.startTimer();
      // Enable resend button
      this.resendDisabled = false;
    }
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  verifyCode() {
    // Perform verification code logic

    //hides the code verification then shows the change password 
    this.showVerifyingCodeContent = false;
    this.showSetPassContent = true;
  }

  resetPass(){
    //set new pass logic
    this.router.navigate(['/login']);
  }
}
