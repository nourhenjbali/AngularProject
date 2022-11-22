import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LogoutComponent } from './logout/logout.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserComponent } from './users/users.component';
import { InternsComponent} from './interns/interns.component' ; 
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  {path:"Admin" , component : AdminComponent , children :[
    {path: '', redirectTo: 'dashbord', pathMatch: 'full'},
    {path: 'dashbord', component: DashbordComponent },
    {path :"interns" , component : InternsComponent},
    {path: 'users', component: UserComponent},
    {path :"statistics", component: StatisticsComponent},
    {path: 'messages', component:MessagesComponent },
    {path: 'logout', component : LogoutComponent },
    {path: 'settings', component:SettingsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
