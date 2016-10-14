require('./dice-manager.styles.css');
let template = require('raw!./dice-manager.template.html');

import DiceRollerComponentModule from '../dice-roller/dice-roller.component';
import DiceManagerController from './dice-manager.controller';

export default angular.module('nl.forsmannetje.dicemanager', [
    DiceRollerComponentModule.name
])
    .component('diceManager', {
        template: template,
        controller: DiceManagerController,
        controllerAs: 'diceManagerCtrl'
    });