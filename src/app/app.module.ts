import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataGridDialogComponent } from './data-grid-dialog/data-grid-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitGrievanceComponent } from './submit-grievance/submit-grievance.component';
import { TrackGrievanceComponent } from './track-grievance/track-grievance.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { GeneralInfoListComponent } from './general-info-list/general-info-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridDialogComponent,
    RegistrationComponent,
    HeaderComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    FooterComponent,
    SubmitGrievanceComponent,
    TrackGrievanceComponent,
    WelcomepageComponent,
    LeftMenuComponent,
    GeneralInfoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
