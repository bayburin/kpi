app.factory('PageContentFactory', PageContentFactory);

PageContentFactory.$inject = ['$http'];

function PageContentFactory($http) {
  const HTML_FILE = 'app/page-content/page-content.component.html';

  return {
    loadContent: () => {
      return $http.get(HTML_FILE)
    }
  }
}




