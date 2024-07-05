import towerStats from "./towerStats.js"
import gameStats from "./gameStats.js"

const upgrades = [
    {
        name: 'Green Zone',
        func: () => { towerStats.greenZone += 5 },
        desc: 'Ennemie passing on the xpBar will now take 5 more damages',
        upgrade: () => { gameStats.greenZone += 5 },
        lvl: 1,
        price: 5,
    },
    {
        name: 'More DAMAGE',
        func: () => { towerStats.damage++ },
        desc: 'Deal one more damage',
        upgrade: () => { gameStats.damage++ },
        lvl: 1,
        price: 5,
    },
    {
        name: 'Shoot FASTER',
        func: () => { towerStats.shootingSpeed++ },
        desc: 'Shoot FASTER (i mean, everything is in the title)',
        upgrade: () => { gameStats.shootingSpeed++ },
        lvl: 1,
        price: 5,
    },
    {
        name: 'HEALING Monk',
        func: () => { towerStats.addHp(5) },
        desc: 'Heal 5 HP',
        upgrade: () => { gameStats.maxHp += 5 },
        lvl: 1,
        price: 5,
    },
    {
        name: "i'm a PUNK",
        func: () => { towerStats.piercing++ },
        desc: 'Your bullets now pierce one more ennemie',
        upgrade: () => { gameStats.piercing++ },
        lvl: 1,
        price: 10,
    },
    {
        name: "i need more BULLETS",
        func: () => { towerStats.eventail++ },
        desc: 'Add one bullet to the side',
        upgrade: () => { gameStats.eventail++ },
        lvl: 1,
        price: 5,
    },
    {
        name: "double SHOT",
        func: () => { towerStats.multishoot++ },
        desc: 'shoot one more bullet each times',
        upgrade: () => { gameStats.multishoot++ },
        lvl: 1,
        price: 10,
    },
    {
        name: "bullet is PREGNANT ???",
        func: () => { towerStats.bulletChild++ },
        desc: 'when a bullet hit, another bullet is fired in a random direction',
        upgrade: () => { gameStats.bulletChild++ },
        lvl: 1,
        price: 10,
    },
    {
        name: "far SIGHT",
        func: () => { towerStats.range += 500 },
        desc: 'your bullets go now further',
        upgrade: () => { gameStats.range += 500 },
        lvl: 1,
        price: 5,
    },
]
export default upgrades