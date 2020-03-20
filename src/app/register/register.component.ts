import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata;
  constructor() {
    this.formdata = new FormGroup({
      firstName: new FormControl(null, Validators.compose([Validators.required])),
      lastName: new FormControl(null, Validators.compose([Validators.required])),
      suffix: new FormControl(null),
      jobTitle: new FormControl(null),
      fax: new FormControl(null),
      ext: new FormControl(null),
      primaryPhone: new FormControl(null, Validators.compose([Validators.required, Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")])),
      cellPhone: new FormControl(null, Validators.compose([Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{4}")])),
      email: new FormControl(null, Validators.compose([Validators.required, Validators.email]))
    });
  }
  ngOnInit() {

  }

  onClickSubmit(data) {
    console.log(data);
    alert("Hello " + data.firstName + " " + data.lastName + "! Your contact is saved!");
  }
}
