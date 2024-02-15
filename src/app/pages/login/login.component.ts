import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';
import { UserAppEmployeeResponse, UserAppRequest } from 'src/app/interfaces/userAppRequest.interface';
import { environment } from 'src/environments/environment';

const APP_TOKEN = environment.APP_TOKEN;
const ID_COMPANY = environment.ID_COMPANY;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Form group for login form
  isLoading: boolean = false; // Loading indicator

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // Initialize login form with form controls
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]], // Username control with validation
      password: [null, [Validators.required]] // Password control with validation
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) { // Check if form is valid
      this.isLoading = true; // Set loading indicator to true
      const username: string = this.loginForm.get('username').value; // Get username from form
      const password: string = this.loginForm.get('password').value; // Get password from form
      const hashedPassword: string = CryptoJS.SHA256(password.toLowerCase()).toString(CryptoJS.enc.Hex); // Hash the password
      const userAppRequest: UserAppRequest = {
        idCompany: ID_COMPANY,
        appToken: APP_TOKEN,
        username: username,
        password: hashedPassword
      };
      this.authEmployee(userAppRequest); // Authenticate user
    } else {
      // Display error message if form is invalid
      this.messageService.add({ severity: 'error', summary: 'Please fill in the fields correctly' });
    }
  }

  authEmployee(userAppRequest: UserAppRequest): void {
    this.authService.authenticationEmployee(userAppRequest).subscribe(
      (response: UserAppEmployeeResponse) => { // Handle successful response
        if (!response.error.isError) {
          localStorage.setItem('token', response.token.accessToken); // Store token in local storage
          localStorage.setItem('idCompany', ID_COMPANY); // Store company ID in local storage
          this.router.navigate(['/home/dashboard']); // Redirect to dashboard page after successful authentication
        } else {
          // Display error message if authentication fails
          this.messageService.add({ severity: 'error', summary: response.error.message });
        }
      },
      (error: any) => { // Handle error response
        // Display error message if an unknown error occurs during authentication
        this.messageService.add({ severity: 'error', summary: 'An unknown error occurred. Please try again.' });
      },
      () => { // Handle completion of authentication process
        this.isLoading = false; // Set loading indicator to false regardless of success or failure
      }
    );
  }

  // Getter for username form control
  get usernameControl() {
    return this.loginForm.get('username');
  }

  // Getter for password form control
  get passwordControl() {
    return this.loginForm.get('password');
  }
}
