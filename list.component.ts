import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../api.service';
import { datamodel } from './Model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  countriesName=[
    "India","USA"
  ];
  templetform!: FormGroup;
  showData: undefined | datamodel[];
  pageSize=5;
  currentpage=1;
  constructor(private formbuilder: FormBuilder, private api: APIService) { }
  ngOnInit(): void {
    this.templetform = this.formbuilder.group({

      name: ['',[Validators.required,Validators.minLength(3)]],
      email:[''],
      age:[''],
      number:[''],
     

    })
    this.show();

  }
  add(data: datamodel) {
    this.api.add(data).subscribe((res) => {
      console.log(data);
    })
  }
  show() {
    this.api.get().subscribe(res => {
      this.showData = res;
      console.log(this.showData);
      
    })
  }
  deleteItem(id:number){
    this.api.delete(id).subscribe(()=>{
      this.show();
    })
  }

}

