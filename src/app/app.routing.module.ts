import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanetsComponent } from './planets/planets.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: '', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }