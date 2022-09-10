import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingservices: LoggingService,private acc: AccountService){
    this.acc.statusUpdated.subscribe(
      (name: string) => alert(name)
      );
  }

  onCreateAccount(name: string,status: string)
  {
      this.acc.addAccount(name,status);
      // this.loggingservices.status(status);
  }
    // loggingservices.status();
    // console.log('A server status changed, new status: ' + accountStatus);
  }
