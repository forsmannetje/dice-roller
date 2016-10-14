require('./dice-roller.styles.css');

import DiceRollerController from './dice-roller.controller';

export default angular.module('nl.forsmannetje.diceroller', [])
    .component('diceRoller', {
        templateUrl: 'src/components/dice-roller/dice-roller.template.html',
        controller: DiceRollerController,
        controllerAs: 'diceRollerCtrl',
        bindings: {
            index: '<'
        }
    });