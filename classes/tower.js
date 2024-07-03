import towerStats from './towerStats.js'
import { angleToTarget } from './utils.js'
import { bullet } from './bullet.js'

export default class tower {
    constructor() {


        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'tower'
        this.div.style.top = (window.innerHeight / 2) + 'px'
        this.div.style.left = (window.innerWidth / 2) + 'px'


        this.hpP = document.createElement('p')
        this.div.appendChild(this.hpP)
        this.updateHp()

        this.size = 75
        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.bullets = []

        this.init()
    }
    init() {
        console.log('Tower is up')
        setInterval(() => { this.updateHp() }, 100)

        this.setTarget()
    }
    updateHp() {
        this.hp = towerStats.hp
        this.hpP.innerHTML = this.hp
    }
    setTarget() {
        // console.log(towerStats.closest)
        if (towerStats.gameOn) setTimeout(() => {
            this.bullets.push(new bullet(angleToTarget(towerStats.closest.left, towerStats.closest.top)))
            this.setTarget()
        }, 2000 / towerStats.shootingSpeed)
    }
}