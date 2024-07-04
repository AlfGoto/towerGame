import towerStats from "./towerStats"

export default [
    {name: 'Green Zone', func: ()=>{towerStats.greenZone++}, desc: 'The XP Bar now deal damage'},
    {name: 'More DAMAGE', func: ()=>{towerStats.damage++}, desc: 'Deal one more damage'},
    {name: 'Shoot FASTER', func: ()=>{towerStats.shootingSpeed++}, desc: 'Shoot FASTER (i mean, everything is in the title)'},
    {name: 'HEALING Monk', func: ()=>{towerStats.hp += 5; towerStats.maxHp += 5}, desc: 'Heal 5 HP'},
]