import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-addformstreamlist',
  templateUrl: './addformstreamlist.component.html',
  styleUrls: ['./addformstreamlist.component.scss']
})
export class AddformstreamlistComponent {
  submitted: boolean = false;
  addlivestreamform: FormGroup = new FormGroup({});
  addformarray: any[] = [];

  constructor(private fb: FormBuilder) {
    this.addlivestreamform = this.fb.group({
      livestreamtitle: ['', Validators.required],
      livestreamdescription: ['', Validators.required],
      livestreamimgurl: ['', Validators.required],
      livestreamvideourl: ['', Validators.required]
    })
  }

  get livestreamtitle() {
    return this.addlivestreamform.get('livestreamtitle') as FormControl;
  };
  get livestreamdescription() {
    return this.addlivestreamform.get('livestreamdescription') as FormControl;
  };
  get livestreamimgurl() {
    return this.addlivestreamform.get('livestreamimgurl') as FormControl;
  };
  get livestreamvideourl() {
    return this.addlivestreamform.get('livestreamvideourl') as FormControl;
  }




  addlivestreamsubmit() {
    this.submitted = true;

    if (this.addlivestreamform.valid) {
      const addform = this.addlivestreamform.value;
      const storedData = localStorage.getItem('addlivestreamdata');
      this.addformarray = storedData ? JSON.parse(storedData) : [];

      // Add the new form entry to the array
      this.addformarray.push(addform);

      // Store the updated array in localStorage
      localStorage.setItem('addlivestreamdata', JSON.stringify(this.addformarray));

      console.log(this.addformarray);

      // Reset the form and submission status
      this.addlivestreamform.reset();
      this.submitted = false;
    }
  }
}
