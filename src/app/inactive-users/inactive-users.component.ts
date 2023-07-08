import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // no need to pass or emit data
 // @Output() userSetToActive = new EventEmitter<number>();
 constructor(private userService : UserService) {

 }

  onSetToActive(id: number) {
    debugger;
    // no need to emit the data or event use user service
    // this.userSetToActive.emit(id);
    // set user active by use of user service
    this.userService.setUserActive(id);
    
  }
}
