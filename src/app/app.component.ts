import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];
  constructor(private account: AccountService ){}
  ngOnInit(){
    this.accounts = this.account.accounts;
  }

  up(st: Event)
  {
    alert(st);
  }
}
