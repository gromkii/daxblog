(function(){
  'use strict';

  angular
    .module('Portfolio', [])
    .controller('Portfolio', Portfolio)

  function Portfolio(){
    var vm = this;
    this.greeting = "Portfolioioio";
  }
})();
