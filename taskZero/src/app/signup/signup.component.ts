import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private shared:SharedService,
    private router:Router
    )
    {

    }
  ngOnInit(): void {

  }
  
  SignUpClick(SignUpForm:NgForm)
  {
    //console.log(SignUpForm.value);
    this.shared.AddSignUpData(SignUpForm.value);
    this.router.navigate(["/form"]);
  }
}
