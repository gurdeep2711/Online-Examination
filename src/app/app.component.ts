import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Online Examination(MCA) - Gurdeep Singh';
  sideNav = [{
    text: 'Home',
    link: 'home'
  }, {
    text: 'Monthly Schedule',
    link: 'schedule'
  }, {
    text: 'Syllabus',
    link: 'syllabus'
  }, {
    text: 'Registration',
    link: 'registration'
  }];
}
