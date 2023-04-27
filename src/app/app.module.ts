import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { LoginComponent } from './components/forms/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { DriverComponent } from './components/forms/driver/driver.component';
import { VehicleComponent } from './components/forms/vehicle/vehicle.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { DriverInformationComponent } from './components/cards/driver-information/driver-information.component';
import { OrderInformationComponent } from './components/cards/order-information/order-information.component';
import { LabelInformationComponent } from './components/atoms/label-information/label-information.component';
import { TitleSectionComponent } from './components/atoms/title-section/title-section.component';
import { VehicleInformationComponent } from './components/cards/vehicle-information/vehicle-information.component';
import { EditVehicleButtomComponent } from './components/modals/edit-vehicle-buttom/edit-vehicle-buttom.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditVehicleFormComponent } from './components/forms/edit-vehicle-form/edit-vehicle-form.component';
import { EditDriverButtomComponent } from './components/modals/edit-driver-buttom/edit-driver-buttom.component';
import { EditDriverFormComponent } from './components/forms/edit-driver-form/edit-driver-form.component';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    LoginPageComponent,
    NotFoundComponent,
    DriverComponent,
    VehicleComponent,
    DriverInformationComponent,
    OrderInformationComponent,
    LabelInformationComponent,
    TitleSectionComponent,
    VehicleInformationComponent,
    EditVehicleButtomComponent,
    EditVehicleFormComponent,
    EditDriverButtomComponent,
    EditDriverFormComponent,
    DeliveryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
