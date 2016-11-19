(function(){
  angular
    .module('app', [
      'Main',
      'About',
      'Portfolio',
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
        .state('portfolio', {
          url:'/portfolio',
          controller:'Portfolio',
          controllerAs:'portfolio',
          templateUrl:'views/controllers/Portfolio.html'
        })
}
})();
