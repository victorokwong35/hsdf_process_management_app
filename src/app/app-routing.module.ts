import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisbursementRequestFormComponent } from './request-forms/disbursement-request-form/disbursement-request-form.component';
import { TravelRequestFormComponent } from './request-forms/travel-request-form/travel-request-form.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { AllRequestsComponent } from './pages/dashboard/all-requests/all-requests.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'all-request', component: AllRequestsComponent },
    ]
  },
  { path: 'disbursement-request', component: DisbursementRequestFormComponent },
  { path: 'travel-request', component: TravelRequestFormComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
