import TowerBuilder from './tower.js'
import basic from './basic.js'
import towerStats from './towerStats.js'
import { randomBetweenTwoInt } from './utils.js'


export default class jeu {
    constructor() {
        this.Tower = new TowerBuilder()
        this.maxEnnemy = 20
        this.delay = 1000


        towerStats.startTime()
        this.spawnMob()
    }
    spawnMob() {
        if (Array.from(document.getElementsByClassName('ennemy')).length < this.maxEnnemy && towerStats.gameOn) {
            towerStats.enemies.push(new basic(randomBetweenTwoInt(1, Math.floor(towerStats.time / 10))))
            if (this.delay > 50) this.delay *= 0.9995
        }
        setTimeout(() => { this.spawnMob() }, 100 + this.delay)
    }
}