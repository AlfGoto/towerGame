import towerStats from "../stats/towerStats.js"
import gameStats from "../stats/gameStats.js"

const upgrades = [
    {
        name: "SMART greenzone",
        desc: '"Your greenzone now give more xp"',
        upgrade: function(){ gameStats.greenZoneXp += this.add },
        lvl: 1,
        price: 10,
        adj: 'xp multiplier',
        gameStats: function(){return gameStats.greenZoneXp},
        add: 1,
    },
    {
        name: "ADAPTATION",
        desc: '"You now need less xp to lvl up"',
        upgrade: function(){ gameStats.maxXp += this.add },
        lvl: 1,
        price: 15,
        adj: 'xp',
        gameStats: function(){return gameStats.maxXp},
        add: -1,
    },
]



export default upgrades