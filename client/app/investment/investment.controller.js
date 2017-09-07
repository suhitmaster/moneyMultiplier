'use strict';

export default class Investment {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;

    this.data = [50, 52, 60, 54,45, 48, 60];

    this.mfReliance = {
      chart: {
        type: 'line'
      },
      series: [{
        data: this.data,
        id: 'mfReliance',
        name: 'Reliance',
        pointStart: Date.UTC(2017, 8, 1),
        pointInterval: 24*3600*1000 ,// one day
      }],

      title: {
        text: 'Reliance'
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
        data: this.data,
        id: 'mfIcici',
        name: 'ICICI',
        pointStart: Date.UTC(2017, 8, 1),
        pointInterval: 24*3600*1000 ,// one day
      }],
      title: {
        text: 'ICICI'
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
