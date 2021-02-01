import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Student } from '../student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  
  constructor(private shared:SharedService,
    private http: HttpClient) { }

  student = new Student('','','','','','','','');
  private signupData:any;

  ngOnInit(): void {
    this.signupData = this.shared.getSignUpData();
    if(this.signupData !== undefined){
      this.student.Email =  this.signupData.email;
      this.student.Country = this.signupData.country;
    }
  }


  SubmitClick(SubmitForm: NgForm):void{
    console.log(this.student);
    //save in Maria DB database AWS
    alert("Thank you!");

    const body = {"id":parseInt(this.student.StudentID),"name":this.student.FullName,
    "email":this.student.Email,"country":this.student.Country,"state":this.student.State,
  "city":this.student.City,"zip":parseInt(this.student.Zip),"password":this.student.Password} ;
    this.http.post<any>('http://localhost:3000/api/student', body).subscribe({
      next: data => {
        console.log(data);
                },
              error: error => {
              console.error('There was an error!', error);
          }
    });

    SubmitForm.reset();
  }

}
