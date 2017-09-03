'use strict';

import angular from 'angular';
import routes from './investment.routes';
import Investment from './investment.controller';

export default angular.module('moneyMultiplierApp.investment', ['moneyMultiplierApp.auth', 'ui.router'])
  .config(routes)
  .controller('Investment', Investment)
  .name;
