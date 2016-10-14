import angular from "angular";
import uiRouter from 'angular-ui-router';

var $ = require("jquery");
import bootstrap from 'bootstrap';

// import config from './config';

import mainCtrl from "./mainCtrl";
import mainService from './mainService';
import home from './directives/home.js';
import homeHtml from './directives/home.html';


import "./styles/cheese.scss";
import './styles/layout.scss';

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
        // css: './styles/layout.scss'

      });



  $urlRouterProvider.otherwise('/');
  });


console.log('here');
