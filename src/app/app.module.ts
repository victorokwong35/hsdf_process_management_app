import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './pages/home/home.component';
import { AllRequestsComponent } from './pages/all-requests/all-requests.component';
import { PendingRequestsComponent } from './pages/pending-requests/pending-requests.component';
import { LeftPanelComponent } from './layouts/left-panel/left-panel.component';
import { RightPanelComponent } from './layouts/right-panel/right-panel.component';
import { HeaderLeftPanelComponent } from './layouts/header-left-panel/header-left-panel.component';
import { HeaderRightPanelComponent } from './layouts/header-right-panel/header-right-panel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisbursementRequestFormComponent } from './request-forms/disbursement-request-form/disbursement-request-form.component';
import { TravelRequestFormComponent } from './request-forms/travel-request-form/travel-request-form.component';
import { ModalContentComponent } from './pages/dashboard/modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LayoutsComponent,
    HomeComponent,
    AllRequestsComponent,
    PendingRequestsComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderLeftPanelComponent,
    HeaderRightPanelComponent,
    DashboardComponent,
    DisbursementRequestFormComponent,
    TravelRequestFormComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
