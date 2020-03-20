import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rgb-cmp',
  templateUrl: './rgb-cmp.component.html',
  styleUrls: ['./rgb-cmp.component.css']
})
export class RgbCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
      input[i].addEventListener("input", function () {
        var red = ((document.getElementById("red") as HTMLInputElement).value);
        var green = ((document.getElementById("green") as HTMLInputElement).value);
        var blue = ((document.getElementById("blue") as HTMLInputElement).value);
        var alpha = ((document.getElementById("alpha") as HTMLInputElement).value);
        console.log(red, green, blue, alpha);
        document.getElementById("display").style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      });
    }
  }

  getColor() {
  }

}
