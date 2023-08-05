import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:string="";
  fruits:any;
  image:any;
  constructor(private http:HttpClient,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let res =this.http.get("http://localhost:12345/fruits/find?id="+this.id);
    res.subscribe(
      data=>{
        this.fruits=data;
        console.log(this.fruits);
        this.image=this.fruits.image;

      }
    );

  }


  

}