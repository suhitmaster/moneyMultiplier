'use strict';

import angular from 'angular';
import routes from './limit.routes';
import Limit from './limit.controller';

export default angular.module('moneyMultiplierApp.limit', ['moneyMultiplierApp.auth', 'ui.router'])
  .config(routes)
  .controller('Limit', Limit)
  .name;
