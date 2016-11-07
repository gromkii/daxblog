(function(){
  angular
    .module('Main', [])
    .config(routeConfig)
    .controller('Main', Main)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl:'views/controllers/Main.html',
        controller:'Main',
        controllerAs:'main'
      })

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    })
  }

  function Main() {
    var vm = this;

    vm.greeting = 'Hello';
  }

})();
