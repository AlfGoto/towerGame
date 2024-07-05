import towerStats from "./towerStats.js"

const upgrades = [
    {name: 'Green Zone', func: ()=>{towerStats.greenZone++}, desc: 'The XP Bar now deal damage'},
    {name: 'More DAMAGE', func: ()=>{towerStats.damage++}, desc: 'Deal one more damage'},
    {name: 'Shoot FASTER', func: ()=>{towerStats.shootingSpeed++}, desc: 'Shoot FASTER (i mean, everything is in the title)'},
    {name: 'HEALING Monk', func: ()=>{towerStats.addHp(5)}, desc: 'Heal 5 HP'},
    {name: "i'm a PUNK", func: ()=>{towerStats.piercing++}, desc: 'Your bullets now pierce one more ennemie'},
    {name: "i need more BULLETS", func: ()=>{towerStats.eventail++}, desc: 'Add one bullet to the side'},
    {name: "double SHOT", func: ()=>{towerStats.multishoot++}, desc: 'shoot one more bullet each times'},
    {name: "bullet is PREGNANT ???", func: ()=>{towerStats.bulletChild++}, desc: 'when a bullet hit, another bullet is fired in a random direction'},
]
export default upgrades