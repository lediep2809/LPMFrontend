import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UsersService } from 'src/app/_Service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser;
  constructor(private userService: UsersService) {
    this.currentUser = this.userService.userValue;
}

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
