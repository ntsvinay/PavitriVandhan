import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
