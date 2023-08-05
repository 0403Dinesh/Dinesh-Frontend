import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  color:string="";
  price:string="";
  vitamins:string="";
  season:string="";
  avalability:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
       uploadImageData.append("color",this.color);
       uploadImageData.append("price",this.price);
    uploadImageData.append("vitamins",this.vitamins);
    uploadImageData.append("season",this.season);
    uploadImageData.append("avalability",this.avalability);
    
    

    let res =this.http.post("http://localhost:12345/fruits/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";      
        this.color="";
        this.price="";      
        this.vitamins="";
        this.season="";
        this.avalability="";
        
      }
    );

  }

}