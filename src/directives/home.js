import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homepage from './home.html';
// import mainService from '../mainService';

function home() {
  return {
    template: homepage,
    restrict: 'E',
    controller: function($scope, mainService) {
      mainService.getBoards()
        .then(function(results) {
          // console.log('b');
          $scope.board = results[0];
        });

       mainService.suggested()
       .then(function(results) {
         $scope.boards = results;
       });

       mainService.pins()
        .then(function(results) {
          $scope.pins = results;
        });
    }
  }
}

export default home;
