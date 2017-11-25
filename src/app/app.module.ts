import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './dataservice/user.service';
import { PersonService } from './dataservice/person.service';
import { WeatherService } from './dataservice/weather.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UserService, PersonService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
