import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPageComponent } from './my-page/my-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MyPageComponent
       }
    ])
  ]
})
export class MyPageModuleModule { }
