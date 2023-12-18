import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PendingRequestsComponent } from './pages/pending-requests/pending-requests.component';
import { AllRequestsComponent } from './pages/all-requests/all-requests.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisbursementRequestFormComponent } from './request-forms/disbursement-request-form/disbursement-request-form.component';
import { TravelRequestFormComponent } from './request-forms/travel-request-form/travel-request-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'all-request', component: AllRequestsComponent },
  { path: 'disbursement-request', component: DisbursementRequestFormComponent },
  { path: 'travel-request', component: TravelRequestFormComponent },
  { path: 'pending-request', component: PendingRequestsComponent },


  // { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
