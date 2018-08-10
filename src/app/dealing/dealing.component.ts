import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-dealing',
  templateUrl: './dealing.component.html',
  styleUrls: ['./dealing.component.scss']
})
export class DealingComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas;
  @ViewChild('myLine') myLine;

  list = '1';
  context: CanvasRenderingContext2D;
  lineContext: CanvasRenderingContext2D;
  chart;
  lineChart;
  game;

  constructor(private changeDetector: ChangeDetectorRef, private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    const id = this.route.snapshot.paramMap.get('game');
    const that = this;

    this.gameService.getGame(id)
      .subscribe(game => {
        this.game = game;
      },
      err => console.error(err));
  }

  showLineChart() {
    const blue = 'rgb(38, 153, 251)';
    const red = 'rgb(255, 0, 0)';
    const option = {
      scales: {
        yAxes: [{
          gridLines: {
            display: true,
            maxTicksLimit: 5,
          },
            ticks: {
              display: false,
              beginAtZero: true,
              fontColor: '#2699fb'
            }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            zeroLineColor: 'transparent'
          },
          ticks: {
            display: false,
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

    const canvas = this.myLine.nativeElement;
    this.lineContext = canvas.getContext('2d');
    const ctx = this.lineContext;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [
          {
            label: 'Line Dataset',
            data: [299777, 300999, 270099, 268877, 280398, 319378, 330384, 329384, 320000, 310393, 310000, 300000, 358383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: '#ffba00',
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [269777, 310999, 280099, 278877, 260398, 309378, 320384, 319384, 330000, 320393, 340000, 310000, 328383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: red,
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [259777, 240999, 230099, 248877, 250398, 249378, 250384, 239384, 240000, 230393, 220000, 210000, 218383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: blue,
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [209777, 190999, 180099, 198877, 190398, 189378, 170384, 169384, 150000, 140393, 130000, 140000, 128383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: '#2258ab',
            borderWidth: 1
          }]
        },
        options: option
    });
  }

  showChart() {
    const blue = 'rgb(38, 153, 251)';
    const red = 'rgb(255, 0, 0)';
    const option = {
      scales: {
        yAxes: [{
          gridLines: {
            display: true,
            maxTicksLimit: 5,
          },
            ticks: {
              display: false,
              beginAtZero: true,
              fontColor: '#2699fb'
            }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            zeroLineColor: 'transparent'
          },
          ticks: {
            display: false,
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

    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');
    const ctx = this.context;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [{
              label: '# of Votes',
              data: [95173, 108473, 178392, 80987, 93748, 203977, 95173, 108473, 178392, 80987, 93748, 203977, 259739, 309374],
              backgroundColor: red,
              borderColor: red,
              borderWidth: 1
          },
          {
            label: '# of Votes',
            data: [83692, 98372, 130977, 59837, 91097, 179823, 80000, 99999, 166666, 79999, 199999, 244444, 300000],
            backgroundColor: blue,
            borderColor: blue,
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [299777, 300999, 270099, 268877, 280398, 319378, 330384, 329384, 320000, 310393, 310000, 300000, 358383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: '#ffba00',
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [269777, 310999, 280099, 278877, 260398, 309378, 320384, 319384, 330000, 320393, 340000, 310000, 328383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: red,
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [259777, 240999, 230099, 248877, 250398, 249378, 250384, 239384, 240000, 230393, 220000, 210000, 218383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: blue,
            borderWidth: 1
          },
          {
            label: 'Line Dataset',
            data: [209777, 190999, 180099, 198877, 190398, 189378, 170384, 169384, 150000, 140393, 130000, 140000, 128383],
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: '#2258ab',
            borderWidth: 1
          }]
        },
        options: option
    });
  }

  refresh() {
    this.changeDetector.detectChanges();
  }

  selectTabMenu(li: string): void {
    this.list = li;
    if (li === '2') {
      this.refresh();
      this.showLineChart();
      this.showChart();
    }
  }
}
