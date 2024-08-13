new Vue({
    el: '#app',
    data: {
        selectedFaction: 'Crusader',
        selectedPoints: 100,
        factions: {
            Crusader: [
                { name: 'Rhyfler', sk: 12, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Bogen', specialAbilities: '', points: 25, weapon: 'Bogen' },
                { name: 'Rhyfler', sk: 12, mt: '2d6-1', ma: 5, toughness: 4, equipment: 'Ryshi', specialAbilities: '', points: 28, weapon: 'Ryshi' },
                { name: 'LMG Rhyfler', sk: 12, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'H-11a', specialAbilities: '', points: 35, weapon: 'H-11a' },
                { name: 'Sharpshooter', sk: 13, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Bogen', specialAbilities: 'Dead-eye (2)', points: 35, weapon: 'Bogen' },
                { name: 'Milwer', sk: 12, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Bogen', specialAbilities: 'Leader (2/3)', points: 28, weapon: 'Bogen' },
                { name: 'Yawdryl', sk: 13, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Bogen', specialAbilities: 'Leader (3/4)', points: 30, weapon: 'Bogen' },
                { name: 'is-Caerten', sk: 12, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Grifkis', specialAbilities: 'Leader (2/5)', points: 30, weapon: 'Grifkis' },
                { name: 'Trench Raider', sk: 13, mt: '2d6+1', ma: 6, toughness: 4, equipment: 'Sio-Cly, Mace', specialAbilities: 'Wallop, Infiltrate', points: 42, weapon: 'Sio-Cly Derringer' },
                { name: 'Trench Raider Yawdryl', sk: 13, mt: '2d6+1', ma: 6, toughness: 4, equipment: 'Sio-Cly, Mace', specialAbilities: 'Infiltrate, Leader (3/4)', points: 50, weapon: 'Sio-Cly Derringer' },
                { name: 'Torpedo Rhyfler', sk: 12, mt: '1d6+1', ma: 5, toughness: 4, equipment: 'Splagen Torpedo', specialAbilities: '', points: 39, weapon: 'Splagen Torpedo' },
                { name: 'Standard Bearer', sk: 12, mt: '1d6+2', ma: 5, toughness: 4, equipment: 'Bogen', specialAbilities: 'Standard', points: 30, weapon: 'Bogen' },
                { name: 'Squirrel Handler', sk: 12, mt: '1d6+2', ma: 4, toughness: 4, equipment: 'Bogen', specialAbilities: 'PykPyk(3)', points: 30, weapon: 'Bogen' },
                { name: 'PykPyks', sk: '-', mt: '-', ma: '-', toughness: '-', equipment: '-', specialAbilities: 'PykPyk(3)', points: 5, weapon: 'PykPyk' }
            ],
            Coftyran: [
                // Add units for Coftyran here
            ]
        },
        weapons: {
            Bogen: { name: 'Bogen', range: 6, snapshot: -2, abilities: '', mightDamage: '' },
            Ryshi: { name: 'Ryshi', range: 8, snapshot: -3, abilities: '', mightDamage: '' },
            'H-11a': { name: 'H-11a', range: 10, snapshot: -3, abilities: 'Automatic, Loader', mightDamage: '' },
            'Grifkis Shotgun': { name: 'Grifkis Shotgun', range: 4, snapshot: -1, abilities: 'Shotgun', mightDamage: '' },
            'Sio-Cly Derringer': { name: 'Sio-Cly Derringer', range: 4, snapshot: -1, abilities: 'Shotgun', mightDamage: '' },
            'Splagen Torpedo': { name: 'Splagen Torpedo', range: 6, snapshot: -4, abilities: 'Blast(1)', mightDamage: 'Might 2d6-1' }
        },
        selectedArmy: [],
    },
    computed: {
        filteredUnits() {
            return this.factions[this.selectedFaction].filter(unit => unit.points <= this.selectedPoints);
        },
        totalPoints() {
            return this.selectedArmy.reduce((total, unit) => total + unit.points, 0);
        }
    },
    methods: {
        addToArmy(unit) {
            this.selectedArmy.push(Object.assign({}, unit)); // Add a copy of the unit
        },
        removeFromArmy(index) {
            this.selectedArmy.splice(index, 1); // Remove the unit at the given index
        },
        isUnitLimitReached(unit) {
            // Implement unit limit check if needed
            return false;
        }
    }
});
