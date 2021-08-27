import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login =new FormGroup({
    username: new FormControl(""),
    password: new FormControl(''),
  });
  private t:number =0;
  is:boolean = false;

  constructor(){}
  ngOnInit() {

  }
 public onSubmit(){
  console.log("onsub")
  if(this.login.value.username == 'admin' && this.login.value.password =='admin'){
    setTimeout(function() {
      window.alert("Đăng nhập thành công");
      window.location.href = "/home/linh-vuc";
    }, 2);
  }else{
    window.location.href = "/alert";
    console.log(this.t);
  }
 }

}
