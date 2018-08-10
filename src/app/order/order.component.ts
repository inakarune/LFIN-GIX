import { Component, OnInit, ViewChild, ElementRef, Renderer2 , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('ulEl') ulEl: ElementRef;

  step = 'buy';
  tmpListener;
  amount = 0;
  price = 100000;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.tmpListener = this.renderer.listen(this.ulEl.nativeElement, 'click', this.logElement.bind(this));
  }

  ngOnDestroy() {
    this.tmpListener();
  }

  add(type: string): void {
    if (type === 'amount') {
      this.amount = this.amount + 1;
    } else if (type === 'price') {
      this.price = this.price + 500;
    }
  }

  subtract(type: string): void {
    if (type === 'amount') {
      this.amount = !!this.amount ? this.amount - 1 : this.amount;
    } else if (type === 'price') {
      this.price = !!this.price ? this.price - 500 : this.price;
    }
  }

  commaMoney(value) {
    if (parseInt(value) >= 1000) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return value;
    }
  }

  cancel(): void {
    alert('현재 취소기능을 지원하지 않습니다.');
  }

  switchTab(type: string): void {
    let word;
    if (type === '매도') {
      word = 'sell';
    } else if (type === '매수') {
      word = 'buy';
    } else {
      word = 'cancel';
    }
    this.step = word;
  }

  logElement({ target }): void {
    if (target && target.nodeName === 'LI') {
      this.switchTab(target.textContent);
    }
  }
}
