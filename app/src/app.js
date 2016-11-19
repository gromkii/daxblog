(function(){
  angular
    .module('app', [
      'Main',
      'About',
      'navbar',
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
        .state('about', {
          url:'/about',
          controller:'About',
          controllerAs:'about',
          templateUrl:'views/controllers/About.html'
        })
}
})();
