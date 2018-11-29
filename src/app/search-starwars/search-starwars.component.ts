import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service"
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-search-starwars',
  templateUrl: './search-starwars.component.html',
  styleUrls: ['./search-starwars.component.css']
})
export class SearchStarwarsComponent implements OnInit {
  searchFields = [{ view: "People", value: "people" }, { view: "Star Ships", value: "starships" }, { view: "Films", value: "films" }]
  searchStarWars : FormGroup
  public _result: any[] = []
  

  constructor(private _fb: FormBuilder, private _db: DatabaseService) { }

  ngOnInit() {
    this.searchStarWars = this._fb.group({
      searchField : new FormControl(),
      searchTerm : new FormControl()
    })
  }
  
  onGet(): void {
    if (this.searchStarWars.controls["searchField"].value === "people") {
      this._db.getPeople(this.searchStarWars.controls["searchTerm"].value).subscribe((res: any) => {this._result = res})
    } else if (this.searchStarWars.controls["searchField"].value === "starships"){
      this._db.getStarShips(this.searchStarWars.controls["searchTerm"].value).subscribe((res: any) => {this._result = res})
    } else {
      this._db.getFilms(this.searchStarWars.controls["searchTerm"].value).subscribe((res: any) => {this._result = res})
    }
  }
  
}
