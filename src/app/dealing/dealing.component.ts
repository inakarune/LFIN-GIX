import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealing',
  templateUrl: './dealing.component.html',
  styleUrls: ['./dealing.component.scss']
})
export class DealingComponent implements OnInit {
  list;

  constructor() { }

  ngOnInit() {
  }

  selectTabMenu(li) {
    this.list = li;
  }

}
