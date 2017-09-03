'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('pdf', {
    url: '/pdf',
    template: require('./pdf.html'),
    controller: 'AppController',
    controllerAs: 'pdf'

  });
}
