import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allFruties:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:12345/fruits/all");
    res.subscribe(
      data=>this.allFruties=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:12345/fruits/delete?id="+id);
    res.subscribe(
      data=>this.allFruties=data
    );
  }

}
