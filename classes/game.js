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

        this.visibilityChange()
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
            towerStats.enemies.push(new basic({ pv: randomBetweenTwoInt(1, Math.floor(towerStats.time / 10)) }))
            if (this.delay > 50) this.delay *= 0.9995
        }
        if (this.gameOn) setTimeout(() => { this.spawnMob() }, 100 + this.delay)
    }
    detectLose() {
        if (towerStats.hp <= 0) { this.lose(); this.gameOn = false }
    }
    lose() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'gameOverScreen'
        towerStats.stopTime()


        this.buildHead()
        this.buildBody()
        this.buildFeet()
    }
    buildHead() {
        this.head = document.createElement('div')
        this.div.appendChild(this.head)

        this.title = document.createElement('h2')
        this.head.appendChild(this.title)
        this.title.innerHTML = 'You lost'
    }
    buildBody() {
        this.body = document.createElement('div')
        this.div.appendChild(this.body)
    }
    buildFeet() {
        this.feet = document.createElement('div')
        this.div.appendChild(this.feet)
        this.replayButton = document.createElement('button')
        this.feet.appendChild(this.replayButton)
        this.replayButton.innerHTML = 'Replay !'
        this.replayButton.onclick = () => {
            this.div.remove()
            this.startGame()
        }
    }

    visibilityChange() {
        document.onvisibilitychange = () => {
            if (document.visibilityState === "hidden") {
                this.gameOn = false
                towerStats.gameOn = false
            }else{
                this.gameOn = true
                towerStats.gameOn = true
            }
        };
    }
}