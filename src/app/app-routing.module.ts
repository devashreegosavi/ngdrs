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
import { EsearchComponent } from './esearch/esearch.component';
import { UserMnmtComponent } from './user-mnmt/user-mnmt.component';
import { ValuationComponent } from './valuation/valuation.component';
import { CertCopyComponent } from './cert-copy/cert-copy.component';

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
      { path : 'geninfolist', component : GeneralInfoListComponent},
      { path : 'esearch', component : EsearchComponent},
      { path : 'usermnmt', component : UserMnmtComponent},
      { path : 'valuation', component : ValuationComponent},
      { path : 'certcpy', component : CertCopyComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
