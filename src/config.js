import uiRouter from "angular-ui-router";



function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      controller: homeCtrl,
    });

}

export default config;
