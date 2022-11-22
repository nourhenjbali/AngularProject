import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { UserComponent } from './Admin/users/users.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:"Admin",component : AdminComponent },
  { path: 'chef', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
