import { Component } from '@angular/core';
import { IonicPage } from '../../../node_modules/ionic-angular';
@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;

  constructor() {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

}
