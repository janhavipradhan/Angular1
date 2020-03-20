import { Component } from '@angular/core';
import { a } from '@angular/core/src/render3';
import { element } from '@angular/core/src/render3/instructions';
import { MyserviceService } from './myservice.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todaydate;
  httpdata;
  formdata;
  emailid;
  title = 'hello-world';
  numarray = ['12', '13', '1', '17', '23', '-9'];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  isavailable = false;
  today = new Date();

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").pipe(
      map((response) => response.json())).
      subscribe((data) => console.log(data))

    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }

  myClickEvent(event) {
    alert("Button is clicked");
    console.log(event);
  }

  changeOfMonths(event) {
    alert("Month is changed");
    console.log(event);
  }


  displaydata(data) { this.httpdata = data; }


  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5)
      return { "passwd": true };
  }
  onClickSubmit(data) { this.emailid = data.emailid; }


}
