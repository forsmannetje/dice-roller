export default class DiceRollerController {

    constructor($rootScope) {
        this.selectedDice = 20;
        this.diceAmount = 1;
        this.perDiceModifier = 0;
        this.totalModifier = 0;

        this.values = [];

        $rootScope.$on('roll', () => { this.roll(); });
        $rootScope.$on('reset', () => { this.resetRolls(); });
    }

    roll() {
        this.perDiceModifier = this.perDiceModifier || 0;
        this.totalModifier   = this.totalModifier || 0;
        this.diceAmount      = (this.diceAmount > 0 && this.diceAmount) || 1;

        let rolls = [];
        let total = 0;
        for (let i = 0; i < this.diceAmount; i++) {
            let roll  = Math.floor(Math.random() * this.selectedDice + 1);
            let value = roll + this.perDiceModifier;
            total += value;

            rolls.push({
                roll: roll,
                value: value,
                mod: this.perDiceModifier,
                nat1: roll === 1 && this.selectedDice === 20,
                nat20: roll === 20 && this.selectedDice === 20
            });
        }

        this.values.push({
            total: total + this.totalModifier,
            mod: this.totalModifier,
            rolls: rolls
        });

        if (this.values.length > 5) {
            this.values.shift();
        }
    }

    resetRolls() {
        this.values = [];
    }
}

DiceRollerController.$inject = ['$rootScope'];