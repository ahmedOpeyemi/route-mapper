'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('routeMapperApp.signup', [])
    .controller('SignupController', SignupController)
    .name;
