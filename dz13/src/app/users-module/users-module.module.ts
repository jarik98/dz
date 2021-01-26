import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, CreateComponent],
  imports: [
    CommonModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{
      path: '', component: UsersComponent
    }])
  ]
})
export class UsersModuleModule { }
