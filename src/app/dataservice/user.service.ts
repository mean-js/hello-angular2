import { Injectable } from '@angular/core';
import {User} from '../datamodel/user';


@Injectable()
export class UserService {
  userList: User[] = [];

  constructor() { }

  getUsers(): User[] {
      this.userList.push(new User('Jai', 1, 'J.Nagar'));
      this.userList.push(new User('Jai', 1, 'J.Nagar'));
      this.userList.push(new User('Jai', 1, 'J.Nagar'));
      return this.userList;
  }

  createUser(newUser: User) {
    this.userList.push(newUser);
  }
}
