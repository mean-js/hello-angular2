import { Injectable } from '@angular/core';
import {Person} from '../datamodel/person';

@Injectable()
export class PersonService {

  constructor() { }

  getPersons(): Person[] {
    const personList = [];

    personList.push(new Person('Hari', 2, 'K.Nagar'));
    personList.push(new Person('Hari', 2, 'K.Nagar'));
    personList.push(new Person('Hari', 2, 'K.Nagar'));
    personList.push(new Person('Hari', 2, 'K.Nagar'));

    return personList;
  }

}
