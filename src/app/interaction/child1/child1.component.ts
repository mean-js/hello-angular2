import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
