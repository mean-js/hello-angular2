import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../datamodel/user';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

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

}
