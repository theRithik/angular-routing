import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(){}

name="rithik"
colors=['red','blue','green']
num=0;
toCkeck=true;
value=1;
useColor='red'

product={
  name:'rithik',
  id:1,
  value:100


}

  ngOnInit(): void {
    
  }
  onSave(){
    console.log("clicked")
  }
  check(check:Event){
    console.log((check.target as HTMLInputElement).value)
  }

}
