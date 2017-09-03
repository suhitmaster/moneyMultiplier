'use strict';

export default class Limit {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
  }


}
