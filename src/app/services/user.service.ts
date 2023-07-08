import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
// service will available to all component in application
@Injectable({providedIn : 'root'})
export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activetoInActive = new EventEmitter<number>();
    inactivetoActive = new EventEmitter<number>();
    
    constructor (private counterService : CounterService) {}

    setUserInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.activetoInActive.emit(this.counterService.activeToInActive());
      }
    
      setUserActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
       this.inactivetoActive.emit(this.counterService.inactiveToActive()); 
      }
}