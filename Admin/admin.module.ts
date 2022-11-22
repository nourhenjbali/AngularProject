import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashbordComponent} from "./dashbord/dashbord.component" ; 
import {MessagesComponent} from "./messages/messages.component" ; 
import {UserComponent} from "./users/users.component"; 
import {StatisticsComponent} from "./statistics/statistics.component" ; 
import {LogoutComponent} from "./logout/logout.component"; 
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminRoutingModule } from './admin-routing.module';
import { InternsComponent } from './interns/interns.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    InternsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
     BrowserAnimationsModule, 
     
  ]
})
export class AdminModule { }
