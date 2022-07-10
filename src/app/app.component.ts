import { Component } from '@angular/core';
import { registerFormCOmponent } from './registerForm/registerForm.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ACS ';

  register($event) {
   
  }
}
