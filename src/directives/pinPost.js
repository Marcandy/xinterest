// //model to post pin depend on ui-boostrap
// $stateProvider.state("items.add", {
//     url: "/add",
//     onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
//         $modal.open({
//             templateUrl: "items/add",
//             resolve: {
//               item: function() { new Item(123).get(); }
//             },
//             controller: ['$scope', 'item', function($scope, item) {
//               $scope.dismiss = function() {
//                 $scope.$dismiss();
//               };
//
//               $scope.save = function() {
//                 item.update().then(function() {
//                   $scope.$close(true);
//                 });
//               };
//             }]
//         }).result.finally(function() {
//             $state.go('^');
//         });
//     }]
// });

import post from './pinPost.html';

function pin() {
    return {
        template: post,
        restrict: 'E',
        // templateUrl: '/pinPost.html'
        controller: function($scope, mainService) {

            $scope.addImageUrl = function(url) {
                mainService.boardPost(url);
            }

            function readURL(input) {
                console.log($scope.file);
                console.log(input);
                if (input.files && input.files[0]) {

                    var reader = new FileReader();

                    reader.onload = function(e) {
                        $('.image-upload-wrap').hide();

                        $('.file-upload-image').attr('src', e.target.result);
                        $('.file-upload-content').show();

                        $('.image-title').html(input.files[0].name);
                    };

                    reader.readAsDataURL(input.files[0]);

                } else {
                    removeUpload();
                }
            }

            function removeUpload() {
                $('.file-upload-input').replaceWith($('.file-upload-input').clone());
                $('.file-upload-content').hide();
                $('.image-upload-wrap').show();
            }

            $('.image-upload-wrap').bind('dragover', function() {
                $('.image-upload-wrap').addClass('image-dropping');
            });
            $('.image-upload-wrap').bind('dragleave', function() {
                $('.image-upload-wrap').removeClass('image-dropping');
            });

        }
    }
}

export default pin;
