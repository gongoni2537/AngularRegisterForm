import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: ''
  };

  submitForm() {
    alert(`נרשמת בהצלחה, ${this.user.name}! (מגדר: ${this.user.gender || 'לא נבחר'})`);
  }
}
