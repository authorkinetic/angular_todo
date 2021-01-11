import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{

  inputText= 'tekst';
  maxLengt= 4;
  colorClass= 'color';
  logoUrl='';
  isDisable=true;
  constructor() {
    setTimeout(() => {
      this.isDisable=false
    }, 3000);
   }

change(){
  this.inputText='Zmiana tekstu i koloru';
  this.maxLengt=10;
  this.colorClass='color2';
}
ngOnInit(): void {};
}
