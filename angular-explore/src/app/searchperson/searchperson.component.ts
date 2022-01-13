import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-searchperson',
  templateUrl: './searchperson.component.html',
  styleUrls: ['./searchperson.component.css']
})
export class SearchpersonComponent implements OnInit {

  constructor(private personService:PersonService) { }
  id:FormControl = new FormControl('');
  data:string = "";
  ngOnInit(): void {
  }

  async searchPerson() {
    this.data = await this.personService.searchPerson(this.id.value);
  }

}
