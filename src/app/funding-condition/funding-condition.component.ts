import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funding-condition',
  templateUrl: './funding-condition.component.html',
  styleUrls: ['./funding-condition.component.scss']
})
export class FundingConditionComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  checkbox = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  };
  step = '1';
  amount = '1주';
  stockAmount = 0;
  sum = this.commaSum(100000);
  nowTime = new Date();

  constructor() { }

  ngOnInit() {
  }

  onModelChange(event) {
    let word: string;
    const evt: string = event.target.value;
    if (evt.length === 1 && event.keyCode === 8) {
      this.amount = '';
      this.sum = 0;
      return ;
    }

    if (event.keyCode === 8) {
      word = evt.slice(0, evt.length - 1).replace(/\D/g, '');
    } else {
      word = evt.replace(/\D/g, '');
    }
    this.amount = word + '주';
    this.sum = this.commaSum(Number(word) * 100000);
  }

  commaSum(value) {
    if (parseInt(value) >= 1000) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return value;
    }
  }

  switchStep(type: string, value: number): void {
    if (type === '2') {
      this.stockAmount = value;
    }
    this.step = type;
  }

  checkTwo() {
    if (!this.amount.length) {
      return alert('투자할 주식 수량을 입력해주세요.');
    }
    const amount = Number(this.amount.replace('주', ''));
      if (amount < this.stockAmount) {
        return alert(`${this.stockAmount}이상 입력해주세요.`);
    }
  }

  closePopUp() {
    this.onClose.emit();
  }

}
