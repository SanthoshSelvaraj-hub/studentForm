import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { StudentView } from './studentView';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private shared:SharedService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshClick();
  }

  public Students:StudentView[] = []
  refreshClick(){
    //pull data and update Students variable
       this.http.get<any>('http://localhost:3000/api/students').subscribe({
        next: data => {
          this.Students = []
          data.forEach((s:any) => {
            var stud = new StudentView(s.id,s.name,s.email,(s.city.concat(" ,",s.state,", ",s.country,", ",s.zip)));
            this.Students.push(stud);
          });

              },
                error: error => {
                console.error('There was an error!', error);
            }
      });
  }


//   AWS bitnami server

// Username: root
// Pwd: 2IRvl7joZvo6
// SSH cmd: ssh -i [your-private-key].pem bitnami@35.174.211.134

// RDS

// Master username
// admin
// Master password
// KA01hh8469
// Endpoint
// taskzerodb.cm23ylawjbiy.us-east-1.rds.amazonaws.com

}
