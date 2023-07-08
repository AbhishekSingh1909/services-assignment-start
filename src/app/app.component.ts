import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];
  activeToInvactiveUserCount : number;
  invactiveToActiveUserCount : number
  constructor( private userService : UserService, private counterService: CounterService){}

  ngOnInit(): void {
    debugger;
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.userService.activetoInActive.subscribe((user :number)=> this.activeToInvactiveUserCount = user);
    this.userService.inactivetoActive.subscribe((user :number)=> this.invactiveToActiveUserCount = user);
  }
}
