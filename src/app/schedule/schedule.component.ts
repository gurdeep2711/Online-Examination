import { Component } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  list = {
    header: [{
      text: 'Date'
    }, {
      text: 'Subject'
    }, {
      text: 'Venue'
    }, {
      text: 'Fee'
    }, {
      text: 'Year of Launch'
    }, {
      text: 'comments'
    }],
    body: [{
      date: '08-06-2020',
      subject: 'Problem Solving and Programming',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 12000
    }, {
      date: '09-06-2020',
      subject: 'Computer Organization and Assembly Language Programming',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 3243
    }, {
      date: '10-06-2020',
      subject: 'Discrete Mathematics',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 3012
    }, {
      date: '11-06-2020',
      subject: 'Systems Analysis and Design',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 1022
    }, {
      date: '12-06-2020',
      subject: 'Communication Skills',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 1294
    }, {
      date: '13-06-2020',
      subject: 'Internet Concepts and Web Design (Lab Course)',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 1200
    }, {
      date: '14-06-2020',
      subject: 'C and Assembly Language Programming (Lab Course)',
      venue: 'Tilak Nagar, New Delhi',
      fee: 150,
      launchDate: '2019',
      comments: 2000
    }]
  };
}
