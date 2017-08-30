'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('moneyMultiplierApp.util', [])
  .factory('Util', UtilService)
  .name;
