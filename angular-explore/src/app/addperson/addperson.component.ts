import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  id:number=0;
  name:String="";
  age:number=0;
  addPerson() {
    this.personService.addPerson(this.id,this.name,this.age);
  }
}
