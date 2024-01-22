import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  submitted: Boolean = false;
  storedsignupdata: any = '';
  loginform: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private router: Router) {

    this.loginform = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    })
  }
  get email() {
    return this.loginform.get('email') as FormControl;
  };
  get password() {
    return this.loginform.get('password') as FormControl;
  };


  Onsubmit() {
    // console.log('success');
    this.submitted = true;
    if (this.loginform.valid && !this.loading) {
      this.loading = true;
      const logemail = this.loginform.value.email;
      const logpassword = this.loginform.value.password;

      setTimeout(() => {
        if (logemail == this.storedsignupdata.email && logpassword == this.storedsignupdata.password) {
          console.log('success')
          this.router.navigate(['/admin/dashboard'])
        } else {
          console.log('error')
        }
        this.loading=false;
      }, 2000);
    }
  }
  ngOnInit(): void {
    const storedData = localStorage.getItem('signupdata')
    if (storedData) {
      this.storedsignupdata = JSON.parse(storedData);
      console.log(this.storedsignupdata)

    } else {
      console.log('localstorage get error')
    }
  }




}
