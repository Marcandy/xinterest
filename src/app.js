import angular from "angular";
import uiRouter from 'angular-ui-router';

// var $ = require("jquery");
import '../node_modules/jquery/dist/jquery.js';
import bootstrap from 'bootstrap';
// use querySelector/querySelectorAll internally


// import config from './config';

import mainCtrl from "./mainCtrl";
import mainService from './mainService';
import home from './directives/home.js';
import homeHtml from './directives/home.html';
import pin from './directives/pinPost.js';
import pinPosthtml from './directives/pinPost.html';



import "./styles/cheese.scss";
import './styles/layout.scss';
import '../dist/style.css'
import './styles/pinpost.scss';

angular.module('xinterest', [uiRouter])
  .controller('menuCtrl', mainCtrl )
  .service('mainService', mainService)
  .directive('login', login)
  .directive('home', home)
  .directive('pin',  pin)
  .directive("fileread", ['mainService', function (mainService) {
    return {
      scope: {
          fileread: "="
      },
      link: function (scope, element, attributes) {
        element.bind("change", function (changeEvent) {
          var reader = new FileReader();
          reader.onload = function (loadEvent) {
            scope.$apply(function () {

              scope.fileread = loadEvent.target.result;
              console.log(scope.fillread)
              mainService.boardPost(loadEvent.target.result);
            });
          }
          reader.readAsDataURL(changeEvent.target.files[0]);
        });
      }
    }
  }])
  .config( function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        // controller: homeCtrl,
        template: '<home></home>',
        // it needs the directive name iside the bracket tag just uiviews not
        url: '/'
        // css: './styles/layout.scss'


      })
      .state('pinPost', {
        url: '/pinPost',
        template: '<pin></pin>'
      });



  $urlRouterProvider.otherwise('/');
  });


console.log('here');
