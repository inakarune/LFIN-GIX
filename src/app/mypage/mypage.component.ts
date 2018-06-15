import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas;
  context: CanvasRenderingContext2D;
  list: string = '1';
  chart;

  constructor() { }

  ngAfterViewInit() {
    const option = {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      },
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };

    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    const ctx = this.context;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: option
    });
  }

  selectTabMenu(li: string) {
    this.list = li;
  }

}
