import TowerBuilder from './classes/tower.js'
import basic from './classes/basic.js'
import towerStats from './classes/towerStats.js'


 let Tower = new TowerBuilder()
let maxEnnemy = 20

towerStats.enemies.push(new basic())
setInterval(() => { if (Array.from(document.getElementsByClassName('ennemy')).length < maxEnnemy) { towerStats.enemies.push(new basic()) } }, 1000)

// setInterval(() => { console.log(towerStats.enemies) }, 1000)
export default Tower

