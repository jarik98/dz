import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard-module/dashboard-module.module').then(m=>m.DashboardModuleModule)},
  { path: 'users' , loadChildren: ()=> import('./users-module/users-module.module').then(m=> m.UsersModuleModule)},
  { path: 'my-page' ,loadChildren: () => import('./my-page-module/my-page-module.module').then(m=>m.MyPageModuleModule)},
  { path: 'login', loadChildren: () => import('./login-module/login-module.module').then(m=>m.LoginModuleModule)},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
