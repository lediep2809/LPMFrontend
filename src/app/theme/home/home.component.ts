import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public check:boolean = true;
  public switch:string = "switch";
  toggle1(){
    this.check = !this.check;
    if(this.check==true){
      this.switch= "switch";
    }else{
      this.switch= "";
    }
}
public show:boolean = false;
public NavC:string = "";
public iC:string = "";


toggle() {
  this.show = !this.show;
    if(this.show==true){
      this.NavC = "show-menu ";
      this.iC="bx-x";
    }else{
      this.NavC = "";
      this.iC="";
    }
}

}
