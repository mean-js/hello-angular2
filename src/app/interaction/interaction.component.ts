import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers} from '@angular/core';
import { User } from '../datamodel/user';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit, DoCheck {
  title: string;
  location: string;
  user: User;
  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
   }

  ngOnInit() {
    this.title = 'Affixus Systems Pvt Ltd';
    this.location = 'Belapur';
    this.user = new User('Jai', 11, 'J.Nagar');
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.user);

    if (changes) {
      console.log('changes detected');
      changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
      changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
      changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
    } else {
      console.log('nothing changed');
    }
  }

  listenChildOutput(ev) {
    console.log(ev);
  }

  listenChildOutputObject(ev: User) {
    this.user = ev;
    console.log(ev);
  }

}
