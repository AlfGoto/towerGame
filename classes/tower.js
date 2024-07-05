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
        this.hpP.innerHTML = towerStats.hp

        document.body.innerHTML += '<svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress"><circle class="bg"></circle><circle class="fg"></circle></svg>'

        this.size = 75
        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.bullets = []

        this.init()
    }
    init() { this.setTarget() }
    setTarget() {
        if (towerStats.closest && towerStats.gameOn) {
            let angle = angleToTarget(towerStats.closest.left, towerStats.closest.top)
            this.bullets.push(new bullet(angle))
            if (towerStats.eventail > 0) {
                let iteration = 0
                let iterationLeft = towerStats.eventail
                let gap = 1

                //iteration
                while (iterationLeft > 0) {
                    iteration++
                    iterationLeft--
                    if (iteration % 2 == 1) gap += 20
                    gap *= -1
                    let tempAngle = { top: angle.top + gap*(angle.top/100), left: angle.left - gap*(angle.left/100) }
                    this.bullets.push(new bullet(tempAngle))
                }
            }
        }
        setTimeout(() => {
            this.setTarget()
        }, 2000 / towerStats.shootingSpeed)
    }
}