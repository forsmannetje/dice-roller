require('bootstrap/dist/css/bootstrap.min.css');

import angular from 'angular';

import DiceManagerComponentModule from './components/dice-manager/dice-manager.component'

angular.module('diceroller', [
    DiceManagerComponentModule.name
]);