import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
 // { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
