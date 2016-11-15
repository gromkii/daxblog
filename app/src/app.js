(function(){
  angular
    .module('app', [
      'Main',
      'ui.router',
    ])
    .config(state)

    state.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function state($stateProvider,$urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
        .state('main', {
          url:'/',
          controller:'Main',
          controllerAs:'main',
          templateUrl:'views/controllers/Main.html'
        })
        .state('testing', {
          url:'/test',
          templateUrl:'views/testing.html'
        })
    } 
})();
