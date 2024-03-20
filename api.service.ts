import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/Model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient,) { }

  add(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/Data/",data);
  }
  get(){
    return this.http.get<datamodel[]>("http://localhost:3000/Data ");
  }
  delete(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/Data/"+id);
  }
  fatch(id:number){
    return this.http.get<datamodel>("http://localhost:3000/Data/"+id);

  }
  update(id:number,data:datamodel){
    return this.http.put<datamodel>("http://localhost:3000/Data/"+id,data);
  }
}
