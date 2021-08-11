import { Component , ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LPMfrontend';
  public show:boolean = false;
  public check:boolean = true;
  public NavC:string = "";
  public iC:string = "";
  public switch:string = "switch";

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

  toggle1(){
    this.check = !this.check;
    if(this.check==true){
      this.switch= "switch";
    }else{
      this.switch= "";

    }
  }

}
