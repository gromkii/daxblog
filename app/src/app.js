(function(){
  angular
    .module('app', [
      'Main',
      'ui.router',
    ])
    .config(function($stateProvider){
      $stateProvider
        .state('main', {
          url:'/',
          controller:'Main',
          controllerAs:'main',
          templateUrl:'../views/controllers/Main.html'
        })
    })

  
    
})();
