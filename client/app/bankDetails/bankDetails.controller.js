'use strict';

export default class BankController {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
  }


}
