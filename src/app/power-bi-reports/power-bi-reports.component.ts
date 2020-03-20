import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-power-bi-reports',
  templateUrl: './power-bi-reports.component.html',
  styleUrls: ['./power-bi-reports.component.css']
})
export class PowerBIReportsComponent implements OnInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;
  myChart = [];
  statsData: any = [];
  country: any = [];
  sale: any = [];
  unitsSold: any = [];
  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("assets/financialStats.json").subscribe(data => {
      this.statsData = data;
      console.log(this.statsData);
      for( let i=0; i<this.statsData.length; i++){
        this.country.push(this.statsData[i].country);
        this.sale.push(this.statsData[i].sale);
        this.unitsSold.push(this.statsData[i].unitsSold);
      }
      console.log(this.country);
      console.log(this.sale);
      console.log(this.unitsSold);
    })
    

  }

  ngOnInit() {
  //   var ctx = document.getElementById('myChart');
  //   this.myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero: true
  //                 }
  //             }]
  //         }
  //     }
  // });

  
  var lineChartData = {
    labels: this.country,
    datasets: [{
      label: 'My First dataset',
      borderColor: '#ffcc00',
      backgroundColor: '#ffcc00',
      fill: false,
      data: this.sale,
      yAxisID: 'y-axis-1',
    }, {
      label: 'My Second dataset',
      borderColor: '#0000ff',
      backgroundColor: '#0000ff',
      fill: false,
      data: this.unitsSold,
      yAxisID: 'y-axis-2'
    }]
  };

  window.onload = function() {
    var ctx = document.getElementById('canvas');
    this.myChart = Chart.Line(ctx, {
      data: lineChartData,
      options: {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        },
        scales: {
          yAxes: [{
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'left',
            id: 'y-axis-1',
          }, {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: true,
            position: 'right',
            id: 'y-axis-2',

            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          }],
        }
      }
    });
  };


      console.log(this.myChart);
    }


  }

