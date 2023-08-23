import { Component,
        OnInit,
        Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string | undefined; // <-- added input annotation
  //name: string; // <-- added name property
  constructor() {
    //removed
    //this.name = 'Felipe'; // set the name
  }
  
  ngOnInit() {
  }
}
