import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './dataservice/user.service';
import { PersonService } from './dataservice/person.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
