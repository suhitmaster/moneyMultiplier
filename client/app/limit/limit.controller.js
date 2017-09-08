'use strict';

export default class Limit {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
    // this.setListeners();
    this.setlimit = function() {
      const limit = document.getElementById('limitVal').value;
      localStorage.setItem('limit', limit);
      console.log('btn clicked', limit);
    };
  }
}
