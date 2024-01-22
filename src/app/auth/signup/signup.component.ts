import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helper/must-match.validator';
// import { use } from 'video.js/dist/types/tech/middleware';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  submitted: Boolean = false;
  loading: boolean = false;
  registerform: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.registerform = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmpassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmpassword')
    })

  }

  get firstname() {
    return this.registerform.get('firstname') as FormControl
  };
  get lastname() {
    return this.registerform.get('lastname') as FormControl
  };
  get email() {
    return this.registerform.get('email') as FormControl
  };
  get password() {
    return this.registerform.get('password') as FormControl
  };
  get confirmpassword() {
    return this.registerform.get('confirmpassword') as FormControl
  };


  Onsubmit() {
    this.submitted = true;
    if (this.registerform.valid && !this.loading) {
      const formvalue = this.registerform.value;
      this.loading = true;
      localStorage.setItem('signupdata', JSON.stringify(formvalue))
      console.log(formvalue)
      this.registerform.reset();
      this.submitted = false;
    }
    this.loading = false;
  }

}
