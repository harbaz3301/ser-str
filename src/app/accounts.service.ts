import { EventEmitter, Injectable, Output } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      constructor(private loggingservices: LoggingService){}
    @Output()  statusUpdated = new EventEmitter<string>();
    addAccount(name: string,status: string){
      this.accounts.push({name: name,status: status});
      this.loggingservices.status(status);
      this.statusUpdated.emit(name);
    }
    
    updateAccount(id: number,status: string){
      this.accounts[id].status = status;
      this.loggingservices.status(status);
      this.statusUpdated.emit(status);
    }
}