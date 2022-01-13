import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class Person{
  id:number = 0;
  age:number = 0;
  constructor(private name:String){}
  setId(id:number) {this.id=id;}
  setAge(age:number) {this.age=age;}
  setName(name:String) {this.name=name;}
}
export class PersonService {

  persons:{ [key: number]: Person } = {};

  constructor() { }

  addPerson(id:number,name:String,age:number) {
    if(this.persons[id]==undefined){
      let p = new Person(name);
      p.setId(id);
      p.setAge(age);
      this.persons[id] = p;
    } else {
      let p = this.persons[id];
      p.setAge(age);
      p.setName(name);
    }
  }

  deletePerson(id:number){
    delete this.persons[id];
  }

  searchPerson(id:number){
    return this.persons[id];
  }
}
