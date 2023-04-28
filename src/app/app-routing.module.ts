import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthFireGuard } from './guards/auth-fire.guard';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginPageComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent,
    canActivate:[AuthFireGuard]
  },
  {
    path:"delivery-request",
    component: DeliveryPageComponent,
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
