import { Component, OnInit } from '@angular/core';
import { User } from '../datamodel/user';
import { UserService } from '../dataservice/user.service';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userList = this.userService.getUsers();
  }

}
