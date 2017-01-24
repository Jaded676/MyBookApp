angular
  .module('app')
  .controller('BooksController', function ($scope,$rootScope,$state,getBooks,bookService) {
    var vm = this;
    vm.hello = "hello World";
    getBooks.get().then(function(data) { //2. so you can use .then()
    vm.books = data.data;
    console.log(vm.books);
 });

    vm.goToBook = function(bookId){
      //$rootScope.book = vm.books[bookId];
    bookService.setBook(vm.books[bookId]);
    $state.go('app.container.bookDetail',{id: bookId});
    };


  });
