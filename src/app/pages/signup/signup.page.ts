import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  currentStep: number = 1;
  userType: string = ''; // Initialize userType property
  showCheck: boolean = false; // Variable to control the display of the check image
  
  constructor(private routerOutlet: IonRouterOutlet, private router: Router) {}

  ionViewWillEnter() {
    // Reset currentStep to 1 whenever the page is entered
    this.currentStep = 1;
    this.userType = 'customer'
  }

  selectUserType(type: string) {
    this.userType = type; // Set the selected user type
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    } else {
      // Handle form submission for Step 3
      // Optionally, navigate to login page after a delay
      this.showCheckImage();
    }
  }

  showCheckImage() {
    // Display the check image
    this.showCheck = true;
    
    // Set a timeout to navigate to the login page after 3 seconds
    setTimeout(() => {
      // Navigate to login page
      this.router.navigate(['/login']);
    }, 5000);
  }
}

