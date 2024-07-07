import towerStats from './stats/towerStats.js'
import { bullet } from './bullet.js'
import { angleToTarget } from './tools/utils.js'
import x2 from './options/x2.js'

export default class tower {
    constructor() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'tower'

        this.hpP = document.createElement('p')
        this.hpP.id = 'hpP'
        this.div.appendChild(this.hpP)
        this.hpP.innerHTML = towerStats.hp

        document.body.innerHTML += '<svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress"><circle class="bg"></circle><circle class="fg"></circle></svg>'

        this.size = 75
        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.init()
    }
    init() { this.setTarget() }
    setTarget() {
        if (towerStats.closest && towerStats.gameOn) {
            let angle = angleToTarget(towerStats.closest.left, towerStats.closest.top)
            towerStats.bullets.push(new bullet({angle: angle}))
            if (towerStats.eventail > 0) {
                let iteration = 0
                let iterationLeft = towerStats.eventail - 1
                let gap = 1

                //iteration
                while (iterationLeft > 0) {
                    iteration++
                    iterationLeft--
                    if (iteration % 2 == 1) gap += 15
                    gap *= -1
                    let tempAngle = { top: angle.top - gap*(angle.left/100), left: angle.left + gap*(angle.top/100) }
                    towerStats.bullets.push(new bullet({angle: tempAngle}))
                }
            }
        }
        towerStats.bullets = []
        setTimeout(() => {
            this.setTarget()
        }, (2000 / towerStats.shootingSpeed) / x2.speed)
    }
}