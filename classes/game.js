import TowerBuilder from './tower.js'
import basic from './basic.js'
import towerStats from './towerStats.js'
import { randomBetweenTwoInt } from './utils.js'
import gameStats from './gameStats.js'

export default class jeu {
    constructor() {
        this.Tower = new TowerBuilder()
        this.maxEnnemy = 100
        this.delay = 1000
        this.gameOn = true

        this.startGame()
    }
    startGame() {
        for (const [key, value] of Object.entries(gameStats)) {
            console.log(towerStats[key])
            towerStats[key] = value
        }
        towerStats.enemies = []
        towerStats.time = 0
        towerStats.startTime()

        console.log(towerStats)

        this.gameOn = true
        this.spawnMob()
        this.detectLose()
    }
    spawnMob() {
        if (Array.from(document.getElementsByClassName('ennemy')).length < this.maxEnnemy && towerStats.gameOn) {
            towerStats.enemies.push(new basic({ pv: randomBetweenTwoInt(1, Math.floor(towerStats.time / 10)) }))
            if (this.delay > 50) this.delay *= 0.9995
        }
        if (this.gameOn) setTimeout(() => { this.spawnMob() }, 100 + this.delay)
    }
    detectLose() {
        if (towerStats.pv <= 0) { this.lose(); this.gameOn = false }
        if (this.gameOn) setTimeout(() => { this.detectLose }, 500)
    }
    lose() {
        console.log('LOSE')
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'gameOverScreen'
    }
}