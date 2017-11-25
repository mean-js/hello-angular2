import { Component, OnInit } from '@angular/core';
import { User } from '../datamodel/user';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  title: string;
  location: string;
  user: User;

  constructor() { }

  ngOnInit() {
    this.title = 'Affixus Systems Pvt Ltd';
    this.location = 'Belapur';
    this.user = new User('Jai', 11, 'J.Nagar');
  }

  listenChildOutput(ev) {
    console.log(ev);
  }

  listenChildOutputObject(ev: User) {
    this.user = ev;
    console.log(ev);
  }

}
