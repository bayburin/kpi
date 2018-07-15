app.controller('PageContentController', PageContentController);

PageContentController.$inject = ['$scope', '$timeout', '$compile', '$element', 'PageContentFactory'];

function PageContentController($scope, $timeout, $compile, $element, PageContentFactory) {
  $timeout(function () {
    PageContentFactory.loadContent().then(
      (response) => $element.replaceWith($compile(response.data)($scope)),
      (response) => console.log('error', response.status)
    )
  }, 5000);
}




