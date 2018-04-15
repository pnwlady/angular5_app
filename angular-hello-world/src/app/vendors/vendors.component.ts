import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  category: string;

  constructor() {
   this.category = ['Arts & Crafts', 'Farm', 'Food', 'Service', 'Non-Profit'];
  }

  ngOnInit() {
  }

}
