'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('limit', {
    url: '/limit',
    template: require('./limit.html'),
    controller: 'Limit',
    controllerAs: 'limit',
    authenticate: 'Auth'
  });
}
