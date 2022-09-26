import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//ng g s services/api
//HttpClientModule

//json-server --watch db.json

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inject http client
  constructor(private http: HttpClient) { }

  //Get any type of data to url
  getAllPropertyTypes(){
    return this.http.get<any>("http://localhost:3000/propertyType/");
  }

  //Post any type of data to url
  addProperty(data : any){
    return this.http.post<any>("http://localhost:3000/property/", data);
  }

  //Get any type of data to url
  getAllProperty(){
    return this.http.get<any>("http://localhost:3000/property/");
  }

  //Get property by id
  getProperty(id : number){
    return this.http.get<any>("http://localhost:3000/property/" + id);
  }

  //Update any type of data to url and id
  updateProperty(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/property/" + id, data);
  }

}
