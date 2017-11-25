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

  getPersonsAsync(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const personList: Person[] = [];

        personList.push(new Person('Async Hari', 2, 'K.Nagar'));
        personList.push(new Person('Async Hari', 2, 'K.Nagar'));
        personList.push(new Person('Async Hari', 2, 'K.Nagar'));
        personList.push(new Person('Async Hari', 2, 'K.Nagar'));

        resolve(personList);
      }, 2000);
    });
  }

}
