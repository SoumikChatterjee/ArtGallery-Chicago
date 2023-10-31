import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:"home",
  },
  {
    component:DetailsComponent,
    path:"details/:id"
  },
  {
    component:WelcomeComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
