import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-deleteperson',
  templateUrl: './deleteperson.component.html',
  styleUrls: ['./deleteperson.component.css']
})
export class DeletepersonComponent implements OnInit {

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

  id:FormControl = new FormControl('');
  data:string = "";

  deletePerson(){
    this.data = this.personService.deletePerson(this.id.value);
  }

}
