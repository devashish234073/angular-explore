import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons:{ [key: number]: Person } = {};

  constructor() { }

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

  searchPerson(id:number){
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