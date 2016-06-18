import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App{{value}}</h1>'
})
export class AppComponent {
  value: number = 100;
}
