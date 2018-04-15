import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  town: string;

  constructor() { 
    this.town = ['Deer Harbor', 'Eastsound', 'West Sound', 'Olga', 'Orcas', 'Waldron'];
  }

  ngOnInit() {
  }

}
