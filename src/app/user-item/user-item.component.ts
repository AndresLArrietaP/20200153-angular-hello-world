import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  name: string; // <-- added name property
  constructor() {
    this.name = 'Felipe'; // set the name
  }
  
  ngOnInit() {
  }
}
