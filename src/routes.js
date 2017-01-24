angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {


  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      templateUrl: 'app/views/hello/hello.html',
      controller: 'HelloController as ctrl'
    })

    .state('app.container', {
      url: 'container/',
      abstract: true,
      views: {
        'container': {
          templateUrl: 'app/views/container/container.html',
          controller: 'ContainerController as ctrlContainer'
        }
      }
    })

    .state('app.container.books', {
      url: 'books',
      views: {
        'booksView': {
          templateUrl: 'app/views/books/books.html',
          controller: 'BooksController as ctrlBooks'
        }
      }
    })
      .state('app.container.bookDetail', {
        url: 'bookDetail/:id',
        views: {
          'booksView': {
            templateUrl: 'app/views/bookDetail/bookDetail.html',
            controller: 'BookDetailController as ctrlBookDetail'
          }
        }
      });
  $urlRouterProvider.otherwise('container/books');
}
