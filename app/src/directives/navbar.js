(function(){
  angular
    .module('navbar', [])
    .directive('navbar', navbar)

  function navbar(){
    var navbarObject = {
      restrict:'EA',
      templateUrl:'/views/partials/navbar.html',
    }

    return navbarObject;
  }
})();
