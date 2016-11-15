(function(){
  angular
    .module('Main', [])
    .controller('Main', Main)


  function Main() {
    var vm = this;

    vm.greeting = 'Hello';
  }

})();
