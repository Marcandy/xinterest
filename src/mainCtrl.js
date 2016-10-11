// angular.module('xinterest').controller('mainCtrl', function($scope, mainService)

function mainCtrl ($scope, mainService) {

  mainService.getBoards()
    .then(function(results) {
      // console.log('b');
      $scope.board = results[0];
    });

   mainService.suggested()
   .then(function(results) {
     $scope.boards = results;
   })

   mainService.pins()
    .then(function(results) {
      $scope.pins = results;
    })

}
//)
export default mainCtrl;
