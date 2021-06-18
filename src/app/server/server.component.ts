import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverName:''
serverID:Number
createServerStatus="Server is not created";
reset=true;
serverCreated=false;
  constructor() {
  this.serverID=10;
  
   }

  ngOnInit(): void {
  }
inputServerName(event:any)
{
this.serverName=event;
}
createServer(){
  this.serverCreated=true;
  this.createServerStatus="Server is created";
}
onReset()
{
  this.serverName='';
}
}
