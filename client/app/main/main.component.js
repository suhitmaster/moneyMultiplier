import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }
}

export default angular.module('moneyMultiplierApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html')
  })
  .name;
