'use strict';

import angular from 'angular';
import routes from './bankDetails.routes';
import BankController from './bankDetails.controller';

export default angular.module('moneyMultiplierApp.admin', ['moneyMultiplierApp.auth', 'ui.router'])
  .config(routes)
  .controller('BankController', BankController)
  .name;
