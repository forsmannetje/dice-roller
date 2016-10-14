require('./dice-manager.styles.css');

import DiceRollerComponentModule from '../dice-roller/dice-roller.component';
import DiceManagerController from './dice-manager.controller';

export default angular.module('nl.forsmannetje.dicemanager', [
    DiceRollerComponentModule.name
])
    .component('diceManager', {
        templateUrl: 'src/components/dice-manager/dice-manager.template.html',
        controller: DiceManagerController,
        controllerAs: 'diceManagerCtrl'
    });