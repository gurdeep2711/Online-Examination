import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'schedule', component: ScheduleComponent
  },
  {
    path: 'syllabus', component: SyllabusComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
