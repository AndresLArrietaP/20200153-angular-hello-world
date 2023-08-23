import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  names: string[]; // <-- added name property
  constructor() {
    this.names = ['Ari','Carlos','Felipe','Nate']; // set the name
  }
  
  ngOnInit() {
  }
}
