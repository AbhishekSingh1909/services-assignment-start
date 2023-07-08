

export class CounterService{
    countActiveUser  = 0; 
    countInActiveUser  = 0;

    activeToInActive(): number{
        return ++this.countActiveUser;

    }

    inactiveToActive(): number{
        return ++this.countInActiveUser;

    }

}