angular
  .module('app')
  .controller('BookDetailController', function ($scope,$rootScope,$state,$stateParams,bookService) {
    var vm = this;
    vm.book = bookService.getBook();
    $scope.atras = function() {
    $state.go('app.container.books');

    };


  });
