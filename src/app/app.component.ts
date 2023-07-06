import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stringInterpolation';


public name = "Ozil";

constructor(){}
  ngOnInit(): void {
   
  }

  greetUser(){
    return "Hello " + this.name
  }

}
