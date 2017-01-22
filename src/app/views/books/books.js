angular
  .module('app')
  .controller('BooksController', function ($scope,$rootScope,$state) {
    var vm = this;
    vm.hello = "hello World";
    

    vm.goToBook = function(bookId){
      $state.go('app.bookDetail',{id: bookId});
    };

  });
