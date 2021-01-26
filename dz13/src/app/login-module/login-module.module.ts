import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule, NgControl,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent}
    ])
  ]
})
export class LoginModuleModule { }
