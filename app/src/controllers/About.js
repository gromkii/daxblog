(function(){
  angular
    .module('About', [])
    .controller('About', About)

  function About(){
    var vm = this;

    vm.greeting = "Sup"
  }
})()
