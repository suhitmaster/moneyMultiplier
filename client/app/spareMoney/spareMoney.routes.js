'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('spareMoney', {
    url: '/spareMoney',
    template: require('./spareMoney.html'),
    controller: 'SpareMoney',
    controllerAs: 'sparemoney',
    authenticate: 'Auth'
  });
}
