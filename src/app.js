import angular from "angular";
import uiRouter from 'angular-ui-router';

// import config from './config';

import menuCtrl from "./menuCtrl";
import mainService from './mainService';
import home from './directives/home.js';
import homeHtml from './directives/home.html';


import "./cheese.sass";


angular.module('xinterest', [uiRouter])
  .controller('menuCtrl', mainCtrl )
  .service('mainService', mainService)
  .directive('home', home)
  .config( function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        // controller: homeCtrl,
        template: '<home></home>',
        // it needs the directive name iside the bracket tag just uiviews not
        url: '/'

      });



  $urlRouterProvider.otherwise('/');
  });


console.log('here');
