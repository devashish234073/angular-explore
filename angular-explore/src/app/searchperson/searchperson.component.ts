import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-searchperson',
  templateUrl: './searchperson.component.html',
  styleUrls: ['./searchperson.component.css']
})
export class SearchpersonComponent implements OnInit {

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }

}
