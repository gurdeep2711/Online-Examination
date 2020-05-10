import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  list = [{
    heading: 'Welcome!',
    text: 'Hello, Welcome to Online Examination company website.'
  }, {
    heading: 'Year of Establishment',
    text: 'This website was established in 2019.'
  }, {
    heading: 'About',
    text: 'Website for students, where they can choose their subject for examination.'
  }];
}