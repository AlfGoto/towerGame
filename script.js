import TowerBuilder from './classes/tower.js'
import basic from './classes/basic.js'
import towerStats from './classes/towerStats.js'


let Tower = new TowerBuilder()

let e = new basic()
setInterval(() => { let e = new basic() }, 1000)