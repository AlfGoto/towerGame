import TowerBuilder from './tower.js'
import basic from './basic.js'
import towerStats from './towerStats.js'
import { randomBetweenTwoInt } from './utils.js'
import gameStats from './gameStats.js'
import loseMenu from './loseMenu.js'

export default class jeu {
    constructor() {
        this.loseMenu = new loseMenu()
        this.Tower = new TowerBuilder()
        this.maxEnnemy = 100
        this.delay = 1000
        this.gameOn = true
        this.numberOfGamesDone = 0

        // this.visibilityChange()
        this.startGame()
    }
    startGame() {
        while (towerStats.enemies.length > 0) { towerStats.enemies[0].kill() }
        for (const [key, value] of Object.entries(gameStats)) { towerStats[key] = value }
        towerStats.hp = towerStats.maxHp
        document.getElementById('hpP').innerHTML = towerStats.hp
        towerStats.time = 0
        towerStats.startTime()
        towerStats.gameOn = true
        towerStats.resetXp()

        this.gameOn = true
        this.spawnMob()
        this.detectLose()
    }
    spawnMob() {
        this.detectLose()
        if (Array.from(document.getElementsByClassName('ennemy')).length < this.maxEnnemy && towerStats.gameOn) {
            towerStats.enemies.push(new basic(
                {
                    pv: randomBetweenTwoInt(
                        1 + Math.floor(this.numberOfGamesDone / 2),
                        Math.floor(towerStats.time / 10) + Math.floor(this.numberOfGamesDone / 2)
                    )
                }))
            if (this.delay > 50) this.delay *= 0.9995
        }
        if (this.gameOn) setTimeout(() => { this.spawnMob() }, 100 + this.delay)
    }
    detectLose() {
        if (towerStats.hp <= 0) {
            this.loseMenu.build();
            this.gameOn = false
            this.numberOfGamesDone++
            this.points += towerStats.lvl
        }
    }


    visibilityChange() {
        document.onvisibilitychange = () => {
            if (document.visibilityState === "hidden") {
                this.gameOn = false
                towerStats.gameOn = false
            } else {
                this.gameOn = true
                towerStats.gameOn = true
            }
        };
    }
}