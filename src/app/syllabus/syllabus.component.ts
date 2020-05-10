import { Component } from '@angular/core';

@Component({
  selector: 'syllabus',
  templateUrl: './syllabus.component.html'
})
export class SyllabusComponent {
  list = {
    header: [{
      text: 'Subject'
    }, {
      text: 'Link'
    }],
    body: [{
      subject: 'Problem Solving and Programming'
    }, {
      subject: 'Computer Organization and Assembly Language Programming'
    }, {
      subject: 'Discrete Mathematics'
    }, {
      subject: 'Systems Analysis and Design'
    }, {
      subject: 'Communication Skills'
    }, {
      subject: 'Internet Concepts and Web Design (Lab Course)'
    }, {
      subject: 'C and Assembly Language Programming (Lab Course)'
    }]
  };
}
