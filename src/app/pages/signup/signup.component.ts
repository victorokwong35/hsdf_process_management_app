import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup
  loginImage: string = "../../../assets/images/login-image.png"
  token!: string
  hasError!: boolean
  noErrors!: boolean
  errorMessage!: any
  loading: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });

  }

  ngOnInit() {

  }

  // passwordMatchValidator(group: FormGroup) {
  //   const password = group.get('password').value;
  //   const confirm_password = group.get('confirm_password').value;

  //   return password === confirm_password ? null : { mismatch: true };
  // }




  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm_password = group.get('confirm_password')?.value;

    return password === confirm_password ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // const { name, email, password } = this.signupForm.value;
      const name = this.signupForm.value.name
      const email = this.signupForm.value.email
      const password = this.signupForm.value.password
      this.loading = true

      console.log(name, email, password)

      this.auth.signUp(name, email, password)
        .subscribe(
          response => {
            const authToken = response.authToken
            // Handle successful registration
            console.log('Registration successful:', response);

            localStorage.setItem('authToken', authToken);
            console.log(authToken)
            this.noErrors = true
            this.loading = false

            localStorage.setItem('email', email)
            localStorage.setItem('password', password)

            setTimeout(() => {
              this.router.navigate(["/login"]);
            }, 2000)

          },
          error => {
            this.loading = false
            this.hasError = true
            if (error.message = "This account is already in use.") {
              this.errorMessage = "This account already exist"
            }
            // this.errorMessage = error.message
            // Handle registration error
            console.error('Registration error:', error);
          }
        );

    }

  }



}
