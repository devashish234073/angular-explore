import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons:{ [key: number]: Person } = {};

  constructor(private http: HttpClient) { }

  addPerson(id:number,name:String,age:number) {
    if(this.persons[id]==undefined){
      let p = new Person(name);
      p.setId(id);
      p.setAge(age);
      this.persons[id] = p;
      console.log("ADDED person with name:"+name);
    } else {
      let p = this.persons[id];
      p.setAge(age);
      p.setName(name);
      console.log("UPDATED person with name:"+name);
    }
  }

  deletePerson(id:number){
    if(this.persons[id]==undefined)  {
      return "No person with id "+id+" exists..";
    }
    delete this.persons[id];
    console.log("DELETED person with id:"+id);
    return "DELETED person with id:"+id;
  }

  async searchPerson(id:number){
    if(id==1111) {
      let data = await this.http.get("/getPersonAtId1111", {responseType: 'text'}).toPromise();;
      //promise.then((data)=>{
        let pd = JSON.parse(data);
        console.log("Promise resolved with: " + pd);
        this.persons[id] = new Person(pd['name']);
        this.persons[id].setAge(pd['age']);
      /*}).catch((error)=>{
        console.log("Promise rejected with " + JSON.stringify(error));
      });*/
    }
    return (this.persons[id]==undefined?"Not found":(this.persons[id].getName()+", aged "+this.persons[id].getAge()));
    
  }
}

class Person{
  id:number = 0;
  age:number = 0;
  constructor(private name:String){}
  setId(id:number) {this.id=id;}
  setAge(age:number) {this.age=age;}
  setName(name:String) {this.name=name;}
  getId(){return this.id;};
  getName(){return this.name;};
  getAge(){return this.age;};
}