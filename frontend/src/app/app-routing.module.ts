import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './home/register-course/register-course.component';
import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterSubjectComponent } from './home/register-subject/register-subject.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';

const routes: Routes = [
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'registerSubject',
    component: RegisterSubjectComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
