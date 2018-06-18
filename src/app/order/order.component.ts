import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  list: string = '1';
  constructor() { }

  ngOnInit() {
  }

  selectTabMenu(li: string) {
    this.list = li;
  }

}
