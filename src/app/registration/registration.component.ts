import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  @ViewChild('regForm', { read: false, static: false }) regForm: NgForm;

  data = {
    subjectName: '',
    dob: '',
    emailId: ''
  };
  errorMsg = '';

  onSubmit() {
    if (this.isNotValid('subjectName')) {
      this.errorMsg = 'Please enter valid Subject Name';
    } else if (this.isNotValid('dob')) {
      this.errorMsg = 'Please enter valid date';
    } else if (this.isNotValid('emailId')) {
      this.errorMsg = 'Please enter valid email';
    } else {
      this.errorMsg = '';
    }
  }

  isNotValid(fieldName) {
    if (this.regForm.form.controls &&
      this.regForm.form.controls[fieldName] &&
      this.regForm.form.controls[fieldName].errors &&
      Object.keys(this.regForm.form.controls[fieldName].errors).length) {
      return true;
    }
    return false;
  }
}
