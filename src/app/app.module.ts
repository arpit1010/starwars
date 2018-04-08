import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlanetsComponent } from './planets/planets.component';
import { SWService } from './swservices';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SWService],
  bootstrap: [AppComponent]
})
export class AppModule { }
