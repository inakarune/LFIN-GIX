import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements AfterViewInit, OnInit {
  @ViewChild('myCanvas') myCanvas;
  @ViewChild('timeChart') timeChart;

  context: CanvasRenderingContext2D;
  timeContext: CanvasRenderingContext2D;
  list = '1';
  chart;
  chart_time;
  dealingList = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGameList();
  }

  ngAfterViewInit() {
    const grey = 'rgba(191, 191, 191, 1)';
    const blue = 'rgb(38, 153, 251)';
    const red = 'rgb(255, 0, 0)';
    const option = {
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            maxTicksLimit: 5,
          },
            ticks: {
              beginAtZero: true,
              fontColor: '#2699fb',
              callback: function(value, index, values) {
                if (parseInt(value) >= 1000) {
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                } else {
                  return value;
                }
              }
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

    const timeCanvas = this.timeChart.nativeElement;
    this.timeContext = timeCanvas.getContext('2d');
    const tctx = this.timeContext;
    this.timeChart = new Chart(tctx, {
      type: 'line',
      data: {
        labels: ['4/1', '4/2', '4/3', '4/4', '4/5', '4/6', '4/7', '4/8', '4/9', '4/10', '4/11', '4/12', '4/13'],
        datasets: [{
            data: [220000, 150000, 100000, 300000, 250000, 110000, 290000, 150000, 130000, 190000, 180000, 150000, 160000],
            borderColor: '#3e95cd',
            fill: false
          }]
      },
      options: {
        legend: {
          display: false
       },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                if (parseInt(value) >= 1000) {
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                } else {
                  return value;
                }
              }
            }
          }]
        }
    }});

    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    const ctx = this.context;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
            labels: ['비덕:캔디..', '힐링아쿠..', '소녀전선', '코스믹워..'],
            datasets: [{
              label: '# of Votes',
              data: [100000, 150000, 300000, 250000],
              backgroundColor: grey,
              borderColor: grey,
              borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [120000, 190000, 250000, 140000],
            backgroundColor: [red, red, blue, blue],
            borderColor: [red, red, blue, blue],
            borderWidth: 1
        }]
        },
        options: option
    });
  }

  selectTabMenu(li: string) {
    this.list = li;
  }

  getGameList() {
    this.gameService.getGames()
      .subscribe(
        res => {
          res.forEach(game => game.status === 'success' ? this.dealingList.push(game): '');
        },
        err => console.error(err)
      );
  }

}
