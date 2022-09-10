import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;
  
  constructor(private acc: AccountService){

  }

  onSetTo(status: string) {
   this.acc.updateAccount(this.id,status);
    // console.log('A server status changed, new status: ' + status);
  }
}