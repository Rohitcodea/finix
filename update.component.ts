import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIService } from '../api.service';
import { datamodel } from '../list/Model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
 public updatedForm!:FormGroup;
 public dataid!:number;
 public showData!:datamodel;

 
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private api :APIService, private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']("id");

      this.api.fatch(this.dataid).subscribe((data:datamodel)=>{
          this.showData=data;
          console.log(this.showData);
          
          this.updatedForm=this.createFormGroup(this.showData);
      });
    });
  }
  createFormGroup(data:any):FormGroup{
    return this.formBuilder.group({
      name:[data.name]
    })

  }
  update(){
    if (this.updatedForm.valid) {
      const updatedData = this.updatedForm.value; // Get updated form data
      this.api.update(this.dataid, updatedData).subscribe((res: datamodel) => {

        this.router.navigate(["/"]); // Redirect on successful update (adjust as needed)
      });
    } else {
      console.error("Form is invalid!");
    }
  }
  }

