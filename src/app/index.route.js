export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  //home state aka default state
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
