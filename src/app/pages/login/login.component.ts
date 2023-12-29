import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  receiveLoginDetails!: any
  loginForm: FormGroup
  token!: string
  hasError!: boolean
  noErrors!: boolean
  errorMessage!: any
  loading: boolean = false;

  email: string | null = null;
  password: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
    private route: ActivatedRoute

  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit() {
    this.email = localStorage.getItem('email')
    this.password = localStorage.getItem('password')
  }


  loginImage: string = "../../../assets/images/login-image.png"


  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      this.loading = true

      this.auth.logIn(email, password)
        .subscribe(
          response => {
            const authToken = response.authToken
            // Handle successful registration
            console.log('Login successful:', response);

            localStorage.setItem('authToken', authToken);

            console.log(authToken)
            this.noErrors = true
            this.loading = false

            setTimeout(() => {
              this.router.navigate(["/dashboard/home"]);
            }, 1000)

          },
          error => {
            this.loading = false
            this.hasError = true
            // if (error.message = "This account is already in use.") {
            //   this.errorMessage = "This account already exist"
            // }
            this.errorMessage = error.message
            // Handle registration error
            console.error('Login error:', error);
          }
        );
    }
  }


}
