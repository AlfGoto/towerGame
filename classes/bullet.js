import { distanceToTarget } from './utils.js'
import towerStats from './towerStats.js'

export class bullet {
    constructor(angle) {
        this.angle = angle
        // this.target = target
        // this.angle = angleToTarget(this.target.left, this.target.top)
        this.div = document.createElement('div')
        this.div.classList.add('bullet')
        document.body.appendChild(this.div)
        this.left = window.innerWidth / 2
        this.top = window.innerHeight / 2
        this.setPos()

        this.alive = true
        this.travel()
        setTimeout(() => { this.div.remove(); this.alive = false }, 3000)
    }
    travel() {
        if ( !this.alive) return
        for(const foe of towerStats.enemies){
            if (distanceToTarget(this.left, this.top, foe.left, foe.top) < 20) {
                foe.dealDamage(towerStats.damage)
                this.alive = false
                this.div.remove()
                return
            }
        }
        setTimeout(() => {
            this.left = this.left + (this.angle.left / 5)
            this.top = this.top + (this.angle.top / 5)
            this.setPos()
            this.travel()
        }, 20)
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
    }
}