import towerStats from "../stats/towerStats.js"
import gameStats from "../stats/gameStats.js"

const upgrades = [
    {
        name: 'Green Zone',
        func: function(){ towerStats.greenZone += this.add },
        desc: '"Ennemie passing on the xpBar will now take 5 more damages"',
        upgrade: function(){ gameStats.greenZone += this.add },
        lvl: 1,
        price: 5,
        adj: 'damage',
        towerStats: function(){return towerStats.greenZone},
        gameStats: function(){return gameStats.greenZone},
        add: 4,
    },
    {
        name: 'More DAMAGE',
        func: function(){ towerStats.damage += this.add },
        desc: '"Deal one more damage"',
        upgrade: function(){ gameStats.damage += this.add },
        lvl: 1,
        price: 5,
        adj: 'damage',
        towerStats: function(){return towerStats.damage},
        gameStats: function(){return gameStats.damage},
        add: 1,
    },
    {
        name: 'Shoot FASTER',
        func: function(){ towerStats.shootingSpeed += this.add },
        desc: '"Shoot FASTER (i mean, everything is in the title)"',
        upgrade: function(){ gameStats.shootingSpeed += this.add },
        lvl: 1,
        price: 6,
        adj: 'shooting speed',
        towerStats: function(){return towerStats.shootingSpeed},
        gameStats: function(){return gameStats.shootingSpeed},
        add: 1,
    },
    {
        name: 'HEALING Monk',
        func: function(){ towerStats.addHp(this.add) },
        desc: '"Heal 5 HP"',
        upgrade: function(){ gameStats.maxHp += this.add },
        lvl: 1,
        price: 4,
        adj: 'max HP',
        towerStats: function(){return towerStats.maxHp},
        gameStats: function(){return gameStats.maxHp},
        add: 5,
    },
    {
        name: "I'm a PUNK",
        func: function(){ towerStats.piercing += this.add },
        desc: '"Your bullets now pierce one more ennemie"',
        upgrade: function(){ gameStats.piercing += this.add },
        lvl: 1,
        price: 12,
        adj: 'piercing',
        towerStats: function(){return towerStats.piercing},
        gameStats: function(){return gameStats.piercing},
        add: 1,
    },
    {
        name: "I need more BULLETS",
        func: function(){ towerStats.eventail += this.add },
        desc: '"Add one bullet to the side"',
        upgrade: function(){ gameStats.eventail += this.add },
        lvl: 1,
        price: 6,
        adj: 'bullets',
        towerStats: function(){return towerStats.eventail},
        gameStats: function(){return gameStats.eventail},
        add: 1,
    },
    {
        name: "Double SHOT",
        func: function(){ towerStats.multishoot += this.add },
        desc: '"Shoot one more bullet each times"',
        upgrade: function(){ gameStats.multishoot += this.add },
        lvl: 1,
        price: 8,
        adj: 'bullets',
        towerStats: function(){return towerStats.multishoot},
        gameStats: function(){return gameStats.multishoot},
        add: 1,
    },
    {
        name: "Bullet is PREGNANT ???",
        func: function(){ towerStats.bulletChild += this.add },
        desc: '"When a bullet hit, another bullet is fired in a random direction"',
        upgrade: function(){ gameStats.bulletChild += this.add },
        lvl: 1,
        price: 10,
        adj: 'bullets',
        towerStats: function(){return towerStats.bulletChild},
        gameStats: function(){return gameStats.bulletChild},
        add: 1,
    },
    {
        name: "Far SIGHT",
        func: function(){ towerStats.range += this.add },
        desc: '"Your bullets now go further"',
        upgrade: function(){ gameStats.range += this.add },
        lvl: 1,
        price: 20,
        adj: 'range',
        towerStats: function(){return towerStats.range},
        gameStats: function(){return gameStats.range},
        add: 500,
    },
    {
        name: "get GREENZONED",
        func: function(){ towerStats.greenZoneRepeat += this.add },
        desc: '"Your greenzone now deal damage one more time"',
        upgrade: function(){ gameStats.greenZoneRepeat += this.add },
        lvl: 1,
        price: 10,
        adj: 'greenzone ticks',
        towerStats: function(){return towerStats.greenZoneRepeat},
        gameStats: function(){return gameStats.greenZoneRepeat},
        add: 1,
    },
]



export default upgrades