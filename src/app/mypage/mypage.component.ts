import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements AfterViewInit {
  @ViewChild('myCanvas') myCanvas;
  @ViewChild('timeChart') timeChart;

  context: CanvasRenderingContext2D;
  timeContext: CanvasRenderingContext2D;
  list: string = '1';
  chart;
  chart_time;

  constructor() { }

  ngAfterViewInit() {
    const option = {
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            maxTicksLimit: 5,
          },
            ticks: {
                beginAtZero: true,
                fontColor: '#2699fb'
            }
        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontColor: '#2699fb'
          }
        }]
      },
      responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    };

    const option2 = {
      scales: {
        xAxes: [{
          type: 'time'
        }]
      },
      legend: {
        display: false
      }
    };

    var speedData = {
      datasets: [{
        data: [{
          x: "04/01/2014", y: 175
      }, {
          x: "10/01/2014", y: 175
      }, {
          x: "04/01/2015", y: 178
      }, {
          x: "10/01/2015", y: 178
      }],
      fill: false
      }]
    };

    const timeCanvas = this.timeChart.nativeElement;
    this.timeContext = timeCanvas.getContext('2d');
    const tctx = this.timeContext;
    this.timeChart = new Chart(tctx, {
        type: 'line',
        data: speedData,
      options: option2
      });
    
    const grey = 'rgba(191, 191, 191, 1)';
    const blue = 'rgb(38, 153, 251)';
    const red = 'rgb(255, 0, 0)';

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
              backgroundColor: [grey, grey, grey, grey, grey, grey],
              borderColor: [grey, grey, grey, grey, grey, grey],
              borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [blue, blue, blue, red, red, red],
            borderColor: [blue, blue, blue, red, red, red],
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
