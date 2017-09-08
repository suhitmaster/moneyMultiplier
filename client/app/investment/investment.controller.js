'use strict';

export default class Investment {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;


    this.mfReliance = {
      chart: {
        type: 'line'
      },
      series: [{
        data: [38.0634, 38.2653, 38.2653, 38.2653, 37.9711, 38.1998, 38.1513, 38.319],
        id: 'mfReliance',
        name: 'SBI BLUE CHIP FUND-DIRECT PLAN -GROWTH',
        pointStart: Date.UTC(2017, 7, 31),
        pointInterval: 24 * 3600 * 1000, // one day
      }],

      title: {
        text: 'SBI BLUE CHIP FUND-DIRECT PLAN -GROWTH'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%e %b'
        }
      },
      yAxis: {
        title: {
          text: 'NAV',
        }
      },
    }

    this.mfIcici = {
      chart: {
        type: 'line'
      },
      series: [{
        data: [62.70, 63.03, 63.03, 63.03, 62.56, 62.83, 63.00, 63.36],
        id: 'mfIcici',
        name: 'ICICI Prudential Banking and Financial Services Fund - Direct Plan - Growth',
        pointStart: Date.UTC(2017, 7, 31),
        pointInterval: 24 * 3600 * 1000, // one day
      }],
      title: {
        text: 'ICICI Prudential Banking and Financial Services Fund - Direct Plan - Growth'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%e %b'
        }
      },
      yAxis: {
        title: {
          text: 'NAV',
        }
      },
    }
  }
}
