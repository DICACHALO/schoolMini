import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';
import { RegisterSubjectComponent } from './home/register-subject/register-subject.component';
import { RegisterCourseComponent } from './home/register-course/register-course.component';
import { FooterComponent } from './home/footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    RegisterSubjectComponent,
    RegisterCourseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
