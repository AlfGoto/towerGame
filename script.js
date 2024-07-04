import TowerBuilder from './classes/tower.js'
import basic from './classes/basic.js'
import towerStats from './classes/towerStats.js'


let Tower = new TowerBuilder()
let maxEnnemy = 20


towerStats.startTime()
setInterval(() => { if (Array.from(document.getElementsByClassName('ennemy')).length < maxEnnemy && towerStats.gameOn) { towerStats.enemies.push(new basic()) } }, 1000)