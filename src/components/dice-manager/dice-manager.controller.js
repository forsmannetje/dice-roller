export default class DiceManagerController {

    constructor($rootScope) {
        this.dices = [0];
        this.$rootScope = $rootScope;
    }

    add() {
        this.dices.push(this.dices.length);
    }

    remove() {
        this.dices.pop();
    }

    rollAll() {
        this.$rootScope.$emit('roll');
    }

    resetAll() {
        this.$rootScope.$emit('reset');
    }
}

DiceManagerController.$inject = ['$rootScope'];