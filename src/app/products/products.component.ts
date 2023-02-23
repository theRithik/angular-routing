import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  details:any;
  constructor(private _server:ServerService,){}
  ngOnInit(): void {
    this.details= this._server.getServer()
   }


}
