'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('investment', {
    url: '/investment',
    template: require('./investment.html'),
    controller: 'Investment',
    controllerAs: 'investment',
    authenticate: 'Auth'
  });
}
