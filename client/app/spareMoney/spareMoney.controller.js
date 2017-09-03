'use strict';
import Chart from 'chart.js';

const data = {
  datasets: [{
    data: [10, 20, 30, 50],
    backgroundColor: ['#f7464a', '#46bfbd', '#fdb45c', '#FF0000'],
  }],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'First',
    'second',
    'third',
    'fourth',
  ]
};


export default class SpareMoney {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.generateChart();
  }

  generateChart() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  }

}
