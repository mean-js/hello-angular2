import { Component } from '@angular/core';

import {Person} from './datamodel/person';
import {User} from './datamodel/user';
import {PersonService} from './dataservice/person.service';
import {UserService} from './dataservice/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private personService: PersonService, private userService: UserService) {}

  title = 'Affixus Systems Pvt Ltd.';
  userList: User[] = this.userService.getUsers();
  personList: Person[] = this.personService.getPersons();

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
