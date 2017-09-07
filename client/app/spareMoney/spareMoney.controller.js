'use strict';

export default class SpareMoney {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.sparedata = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'You have spend money on this in last month.'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Travel',
          y: 56.33
        }, {
          name: 'Food',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Shopping',
          y: 10.38
        }, {
          name: 'Recharge',
          y: 4.77
        }, {
          name: 'Petrol',
          y: 0.91
        }, {
          name: 'Misc',
          y: 0.2
        }]
      }]
    }
  }
}
