import { Component,  Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent  {
  @Input() users: string[];
  
  // no need to pass or emit 
  //@Output() userSetToInactive = new EventEmitter<number>();

  constructor( private userService : UserService){
    
  }
  

  onSetToInactive(id: number) {
    debugger;
    // no need to emit the data or event use user service
    //this.userSetToInactive.emit(id);
    // set user active by use of user service
    this.userService.setUserInactive(id);
    
  }
}
