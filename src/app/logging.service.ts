import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{
    status(st: string)
    {
        console.log('A server status changed, new status: ' + st);
    }    
}