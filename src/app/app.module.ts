import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './dataservice/user.service';
import { PersonService } from './dataservice/person.service';
import { WeatherService } from './dataservice/weather.service';
import { InteractionComponent } from './interaction/interaction.component';
import { Child1Component } from './interaction/child1/child1.component';
import { ColorblueDirective } from './datadirective/colorblue.directive';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractionComponent,
    Child1Component,
    ColorblueDirective,
    BootstrapdemoComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [UserService, PersonService, WeatherService],
  bootstrap: [BootstrapdemoComponent]
})
export class AppModule { }
