import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css']
})
export class FbComponent implements OnInit {
  firstFormGroup: FormGroup;
  usd_tel = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  std_email = "[^ @]+@[^ @]+.[^ @]+";
  letters = "[a-zA-Z]+";
  numbers = "[0-9]+";
  customerdata: any = [];
  flag = true;
  constructor(private _formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.httpClient.get("assets/contactDetails.json").subscribe(data => {
      console.log(data);
      this.customerdata = data;
    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      title: [null,],
      firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(this.letters)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(this.letters)]],
      suffix: [null, Validators.pattern(this.letters)],
      jobTitle: [null, Validators.pattern(this.letters)],
      primaryPhone: ['', [Validators.required, Validators.pattern(this.usd_tel)]],
      ext: [null, Validators.pattern(this.numbers)],
      cellPhone: ['', Validators.pattern(this.usd_tel)],
      fax: [null, [Validators.pattern(this.numbers), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.pattern(this.std_email)]],
      contactType: [null,]
    })
  }
  onClickSubmitOrUpdate(data, flag) {
    if (flag == true) {
      console.log(data.value);
      alert("Your contact is saved!");
      this.customerdata.push(data.value);
    }
    if (flag == false) {
      console.log(data.value);
      let email = data.controls.email.value;
      for (let cd of this.customerdata) {
        if (email === cd.email) {
          cd.title = data.value.title;
          cd.firstName = data.value.firstName;
          cd.lastName = data.value.lastName;
          cd.suffix = data.value.suffix;
          cd.jobTitle = data.value.jobTitle;
          cd.primaryPhone = data.value.primaryPhone;
          cd.ext = data.value.ext;
          cd.cellPhone = data.value.cellPhone;
          cd.fax = data.value.fax;
          cd.email = email;
          cd.contactType = data.value.contactType;
          this.firstFormGroup.controls['email'].enable();
          this.flag = true;
        }
      }
    }
  }

  onClickCancel() {
    this.firstFormGroup.controls['email'].enable();
    this.flag = true;
  }

  removeContact(data) {
    let index = this.customerdata.indexOf(data);
    this.customerdata.splice(index, 1);
  }

  editContact(data) {
    this.firstFormGroup.setValue({
      title: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      suffix: data.suffix,
      jobTitle: data.jobTitle,
      primaryPhone: data.primaryPhone,
      ext: data.ext,
      cellPhone: data.cellPhone,
      fax: data.fax,
      email: data.email,
      contactType: data.contactType,
    })
    this.firstFormGroup.controls['email'].disable();
    this.flag = false;
  }
}