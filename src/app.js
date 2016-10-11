import angular from "angular";
import uiRouter from 'angular-ui-router';
import config from './config'

import mainCtrl from "./mainCtrl";
import mainService from './mainService';


import "./cheese.sass";


angular.module('xinterest', [uiRouter])
  .controller('mainCtrl', mainCtrl )
  .service('mainService', mainService);
  .config('config', config)
