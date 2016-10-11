import angular from "angular";

import mainCtrl from "./mainCtrl";
import mainService from './mainService';

import "./cheese.sass";


angular.module('xinterest', [])
  .controller('mainCtrl', mainCtrl )
  .service('mainService', mainService);
