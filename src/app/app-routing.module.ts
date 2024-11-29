import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SubmitGrievanceComponent } from './submit-grievance/submit-grievance.component';
import { TrackGrievanceComponent } from './track-grievance/track-grievance.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { GeneralInfoListComponent } from './general-info-list/general-info-list.component';

const routes: Routes = [
  { path : '', redirectTo :'/home', pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path : 'registraion', component : RegistrationComponent},
  { path : 'login', component : LoginComponent},
  { path : 'submitgrievance', component: SubmitGrievanceComponent},
  { path : 'trackgrievance', component : TrackGrievanceComponent},
  { 
    path : 'welcomepage',
    component : WelcomepageComponent,
    children: [
      { path : 'geninfolist', component : GeneralInfoListComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
