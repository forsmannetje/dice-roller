require('./dice-roller.styles.css');
let template = require('raw!./dice-roller.template.html');

import DiceRollerController from './dice-roller.controller';

export default angular.module('nl.forsmannetje.diceroller', [])
    .component('diceRoller', {
        template: template,
        controller: DiceRollerController,
        controllerAs: 'diceRollerCtrl',
        bindings: {
            index: '<'
        }
    });