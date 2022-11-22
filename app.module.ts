import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { BodyComponent } from './Admin/body/body.component';
import { MessagesComponent } from './Admin/messages/messages.component';
import { SettingsComponent } from './Admin/settings/settings.component';
import { LogoutComponent } from './Admin/logout/logout.component';
import { StatisticsComponent } from './Admin/statistics/statistics.component';
import { TasksComponent } from './Chef/tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Admin/admin.component';
import { AdminModule } from './Admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Admin/sidenav/sidenav.component';
import {MatIconModule} from '@angular/material/icon' ; 
import { HttpClientModule} from '@angular/common/http' ; 
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './Admin/dialog-box/dialog-box.component'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserComponent } from './Admin/users/users.component';
import { ChartComponent } from "ng-apexcharts";
import { NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    StatisticsComponent,
    SettingsComponent,
    UserComponent,
    MessagesComponent,
    LoginComponent,
    DialogBoxComponent,
    TasksComponent,
    AdminComponent,
    LogoutComponent,
    DashbordComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule ,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
