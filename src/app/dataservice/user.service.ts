import { Injectable } from '@angular/core';
import {User} from '../datamodel/user';


@Injectable()
export class UserService {

  constructor() { }

  getUsers(): User[] {
      const userList = [];
      userList.push(new User('Jai', 1, 'J.Nagar'));
      userList.push(new User('Jai', 1, 'J.Nagar'));
      userList.push(new User('Jai', 1, 'J.Nagar'));
      return userList;
  }
}
