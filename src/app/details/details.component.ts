import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 serverId!: number;
 server:any;
  constructor(private _active:ActivatedRoute, private _server:ServerService,private _route:Router){}
  ngOnInit(): void {
   this.serverId= +this._active.snapshot.paramMap.getAll('id');
   this.server= this._server.getServer().find((x)=>
    x.id===this.serverId)
  }
  onClick(){
this._route.navigate(['products'])
  }

}
