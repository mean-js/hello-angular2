import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import { User } from '../../datamodel/user';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {

  @Input() title: string;
  @Input() location: string;
  @Input() user: User;

  @Output() childOutput = new EventEmitter();
  @Output() childOutputObject: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    this.childOutput.emit('Hello From Child');

    this.childOutputObject.emit(new User('ABCD', 11, 'BCCDDD'));
  }


  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(cur + ' ' + prev);
    }
    console.log('onchanges');
  }

}
