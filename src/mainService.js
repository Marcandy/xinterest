// angular.module('xinterest').service('mainService', function($http)

function mainService($http) {

    const baseUrl = 'https://api.pinterest.com/v1/';
    const access = 'access_token=AUzEStm3dilbp1-myJu2EA0q898PFHw5x9ng1KBDd4Mxs8BEDQAAAAA';
    const fields = '&fields=image%2Cdescription%2Curl';

    // const boards = 'me/boards'


    this.getBoards = function() {
        return $http.get(baseUrl + 'me/boards/?' + access + fields)
            .then(function(results) {
                console.log(results);
                return results.data.data;
            })
    }

    this.suggested = function() {
            return $http.get(baseUrl + 'me/boards/suggested/?' + access + fields)
                .then(function(res) {
                    // console.log(res);
                    return res.data;
                })
        }
        //https://api.pinterest.com/v1/me/pins/?access_token=&fields=note%2Cimage%2Cmedia

    this.pins = function() {
        return $http.get(baseUrl + 'me/pins/?' + access + "&fields=note%2Cimage%2Cmedia")
            .then(function(info) {
                // console.log(info);
                return info.data.data;
            })
    }

    // let pinObj = {
    //     board: 'marcandyn/javascript',
    //     note: userText,
    //     image: 'from computer'
    // }

    //
    this.boardPost = function(url) {
        // var newImage = 'https://www.base64-image.de/build/img/mr-base64-482fa1f767.png';
        // https://api.pinterest.com/v1/pins/?access_token=&fields=board%2Cnote%2Cimage
        var board = 'marcandyn/javascript';
        var note = 'working';

        $http({
            method: 'POST',
            url: 'https://api.pinterest.com/v1/pins/?access_token=AUzEStm3dilbp1-myJu2EA0q898PFHw5x9ng1KBDd4Mxs8BEDQAAAAA&fields=note%2Cboard%2Cimage',
            data: {
                board: 'marcandyn/javascript',
                note: 'fhdfhdf',
                image_url: url
            }
        }).then(function(response) {
            console.log(response);
        })
    }
}
//----------pin-post-----------------


export default mainService;
