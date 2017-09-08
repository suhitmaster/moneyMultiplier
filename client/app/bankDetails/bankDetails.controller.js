'use strict';

export default class BankController {
  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.setLimit();
  }

  setLimit() {
    const limit = localStorage.getItem('limit');
    console.log('limit---', limit)
    if(parseInt(limit)) {
      document.getElementById('limit').innerHTML = `<p>You have set your limit for this month to <b>${limit}</b></p>`;

      document.getElementById('spareMoney').innerHTML = `<p>
            You can invest ${50000 - limit} to either schemes avaible in 
            <a href="http://localhost:3000/investment">investment</a> menu
         </p>`;
    } else {
      console.log('not limit set');
    }
  }


}
