  'use strict';

  import angular from 'angular';
  import routes from './spareMoney.routes';
  import SpareMoney from './spareMoney.controller';

  export default angular.module('moneyMultiplierApp.spareMoney', ['moneyMultiplierApp.auth', 'ui.router'])
    .config(routes)
    .controller('SpareMoney', SpareMoney)
    .name;
