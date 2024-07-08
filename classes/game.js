import TowerBuilder from './tower.js'
import basic from './basic.js'
import towerStats from './stats/towerStats.js'
import { randomBetweenTwoInt } from './tools/utils.js'
import gameStats from './stats/gameStats.js'
import loseMenu from './screens/loseMenu.js'
import help from './screens/helpText.js'

export default class jeu {
    constructor() {
        this.loseMenu = new loseMenu()
        this.Tower = new TowerBuilder()
        this.maxEnnemy = 100
        this.delay = 1000
        this.gameOn = true
        this.numberOfGamesDone = 0
        this.lastBossSpawnedTime = 1

        // this.visibilityChange()
        this.startGame()

        setTimeout(() => { document.getElementById('helpDiv').remove() }, 5000)
    }
    startGame() {
        while (Array.from(document.getElementsByClassName('ennemy')).length > 0) { Array.from(document.getElementsByClassName('ennemy'))[0].object.kill() }
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
            this.chooseMobToSpawn()
            if (this.delay > 50) this.delay *= gameStats.delayDiviser
        }
        if (this.gameOn) setTimeout(() => { this.spawnMob() }, 100 + this.delay)
    }



    chooseMobToSpawn() {
        if (Math.floor(towerStats.time / 60) > this.lastBossSpawnedTime) {
            if (towerStats.time > 200) {
                this.mob('pinkboss', 40)
            } else {
                this.mob('boss', 16)
            }
            this.lastBossSpawnedTime++
        } else if (randomBetweenTwoInt(1, 10) <= Math.round((towerStats.time - 200) / 60)) {
            this.mob('boss', 16)
        } else if (randomBetweenTwoInt(1, 10) <= Math.round(towerStats.time / 60)) {
            this.mob('miniBoss', 4)
        } else {
            this.mob()
        }
    }
    mob(className = null, mult = 1) {
        towerStats.enemies.push(new basic(
            {
                pv: mult * randomBetweenTwoInt(
                    1 + Math.floor(towerStats.time / 15) + Math.floor(this.numberOfGamesDone / 2),
                    Math.floor(towerStats.time / 5) + Math.floor(this.numberOfGamesDone / 2)
                ),
                class: className || null
            }
        ))
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