import { Component, OnInit } from '@angular/core';

import {Person} from './datamodel/person';
import {User} from './datamodel/user';
import {PersonService} from './dataservice/person.service';
import {UserService} from './dataservice/user.service';
import { WeatherService } from './dataservice/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private personService: PersonService, private userService: UserService, private weatherService: WeatherService) {}

  title = '';
  userList: User[] = [];
  personList: Person[] = [];

  ngOnInit() {
    this.title = 'Affixus Systems Pvt Ltd.';
    this.userList = this.userService.getUsers();

    this.personService.getPersonsAsync()
    .then((data: Person[]) => {
        this.personList = data;
    }).catch((err) => {
        console.log(err);
    });

    // GET WEATHER DETAIL OF MUMBAI
    this.weatherService.getWeatherDetialByCityName('mumbai');

    // WEATTHER API AS PROMISE
    this.weatherService.getWeatherDetialByCityNameReturnAsPromise('mumbai')
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

    // WEATTHER API AS OBSERABLE
    this.weatherService.getWeatherDetialByCityNameReturnAsObservable('mumbai')
    .subscribe(data => {
      console.log(data);
    });
  }

  selectUser(user) {
    console.log(user);
  }

  createUser() {
    const newUser = new User('PK', 1, 'Belapur');
    this.userService.createUser(newUser);
  }

  selectPerson(person) {
    console.log(person);
  }
}
