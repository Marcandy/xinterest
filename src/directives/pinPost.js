//model to post pin depend on ui-boostrap
$stateProvider.state("items.add", {
    url: "/add",
    onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
        $modal.open({
            templateUrl: "items/add",
            resolve: {
              item: function() { new Item(123).get(); }
            },
            controller: ['$scope', 'item', function($scope, item) {
              $scope.dismiss = function() {
                $scope.$dismiss();
              };

              $scope.save = function() {
                item.update().then(function() {
                  $scope.$close(true);
                });
              };
            }]
        }).result.finally(function() {
            $state.go('^');
        });
    }]
});
