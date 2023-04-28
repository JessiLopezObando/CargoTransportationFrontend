import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  showRegisterForm:boolean = false;
  showText:String = "Don't have an account? Register here";

  onClickSlideToggle(){
    this.showRegisterForm = !this.showRegisterForm;
    if(!this.showRegisterForm){
      this.showText = "Don't have an account? Register here";
    }else{
      this.showText = "Already have an account? Login here";
    }
  }

}
