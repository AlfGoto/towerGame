import towerStats from './towerStats.js'
import { bullet } from './bullet.js'
import { angleToTarget } from './utils.js'

export default class tower {
    constructor() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'tower'
        this.div.style.top = (window.innerHeight / 2) + 'px'
        this.div.style.left = (window.innerWidth / 2) + 'px'


        this.hpP = document.createElement('p')
        this.hpP.id = 'hpP'
        this.div.appendChild(this.hpP)
        // this.updateHp()
        this.hpP.innerHTML = towerStats.hp


        document.body.innerHTML += '<svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress"><circle class="bg"></circle><circle class="fg"></circle></svg>'

        this.size = 75
        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.bullets = []

        this.init()
    }
    init() {this.setTarget()}
    setTarget() {
        if (towerStats.closest && towerStats.gameOn) this.bullets.push(new bullet(angleToTarget(towerStats.closest.left, towerStats.closest.top)))
        setTimeout(() => {
            this.setTarget()
        }, 2000 / towerStats.shootingSpeed)
    }
}