'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('bankDetails', {
    url: '/bankDetails',
    template: require('./bankDetails.html'),
    controller: 'BankController',
    controllerAs: 'bank',
    authenticate: 'Auth'
  });
}
