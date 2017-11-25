import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './dataservice/user.service';
import { PersonService } from './dataservice/person.service';
import { WeatherService } from './dataservice/weather.service';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractionComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UserService, PersonService, WeatherService],
  bootstrap: [InteractionComponent]
})
export class AppModule { }
