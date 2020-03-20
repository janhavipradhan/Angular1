import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-cmp',
  templateUrl: './basics-cmp.component.html',
  styleUrls: ['./basics-cmp.component.css']
})
export class BasicsCmpComponent implements OnInit {
  todaydate;
  httpdata;
  formdata;
  emailid;
  title = 'hello-world';
  numarray = ['12', '13', '1', '17', '23', '-9'];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  isavailable = false;
  today = new Date();
  constructor() { }

  ngOnInit() {
  }
  myClickEvent(event) {
    alert("Button is clicked");
    console.log(event);
  }
  changeOfMonths(event) {
    alert("Month is changed");
    console.log(event);
  }
}
