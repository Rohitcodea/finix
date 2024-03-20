import { Component } from '@angular/core';

@Component({
  selector: 'app-paginetion',
  templateUrl: './paginetion.component.html',
  styleUrl: './paginetion.component.css'
})
export class PaginetionComponent {

  data=[
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh2',mobile:1234567890},
    {name:'durgesh3',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
    {name:'durgesh',mobile:1234567890},
  ];
  pageSize=5;
  currentpage=1;
}
