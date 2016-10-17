// angular.module('xinterest').service('mainService', function($http)

function mailService($http) {

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
  return $http.get(baseUrl + 'me/pins/?' + access  + "&fields=note%2Cimage%2Cmedia")
  .then(function(info) {
    // console.log(info);
    return info.data.data;
    })
  }

  //----------pin-post-----------------

  this.boardPost = function() {
    return http.post(baseUrl + 'pins/' + access)
  }


}

export default mailService;
