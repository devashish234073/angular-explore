import { Component, OnInit } from '@angular/core';
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

}
