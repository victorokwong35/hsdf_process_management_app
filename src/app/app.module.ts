import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LeftPanelComponent } from './layouts/left-panel/left-panel.component';
import { RightPanelComponent } from './layouts/right-panel/right-panel.component';
import { HeaderLeftPanelComponent } from './layouts/header-left-panel/header-left-panel.component';
import { HeaderRightPanelComponent } from './layouts/header-right-panel/header-right-panel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisbursementRequestFormComponent } from './request-forms/disbursement-request-form/disbursement-request-form.component';
import { TravelRequestFormComponent } from './request-forms/travel-request-form/travel-request-form.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment.development';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { AllRequestsComponent } from './pages/dashboard/all-requests/all-requests.component';
// import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FundRequestComponent } from './request-forms/fund-request/fund-request.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LayoutsComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderLeftPanelComponent,
    HeaderRightPanelComponent,
    DashboardComponent,
    DisbursementRequestFormComponent,
    TravelRequestFormComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AllRequestsComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FundRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ModalModule.forRoot(),
    provideFirebaseApp(() => initializeApp({ "projectId": "process-management-722a9", "appId": "1:295471682213:web:23c33cec3f35b3322ef34c", "storageBucket": "process-management-722a9.appspot.com", "apiKey": "AIzaSyBLPEqooafP9V8ygIgpdEF7v7KBq1LwdCg", "authDomain": "process-management-722a9.firebaseapp.com", "messagingSenderId": "295471682213" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({ "projectId": "process-management-722a9", "appId": "1:295471682213:web:23c33cec3f35b3322ef34c", "storageBucket": "process-management-722a9.appspot.com", "apiKey": "AIzaSyBLPEqooafP9V8ygIgpdEF7v7KBq1LwdCg", "authDomain": "process-management-722a9.firebaseapp.com", "messagingSenderId": "295471682213" })),
    provideDatabase(() => getDatabase()),

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          // Retrieve the token from your storage (e.g., localStorage)
          return localStorage.getItem('authToken');
        },
        allowedDomains: ['http://localhost:4200/'], // Replace with your Xano domain
      },
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
