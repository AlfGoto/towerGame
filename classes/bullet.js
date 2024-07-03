import { distanceToTarget, angleToTarget } from './utils.js'

export class bullet {
    constructor(target) {
        this.target = target
        this.angle = angleToTarget(this.target.left, this.target.top)
        this.div = document.createElement('div')
        this.div.classList.add('bullet')
        document.body.appendChild(this.div)
        this.left = window.innerWidth / 2
        this.top = window.innerHeight / 2
        this.setPos()

        this.alive = true
        this.travel()
        setTimeout(() => { this.div.remove(); this.alive = false }, 10000)
    }
    travel() {
        if (!this.target || !this.alive) return
        if (distanceToTarget(this.left, this.top, this.target.left, this.target.top) < 10) {
            this.target.dealDamage(1)
            this.alive = false
            this.div.remove()
            return
        }
        setTimeout(() => {
            this.left = this.left + (this.angle.left / 10)
            this.top = this.top + (this.angle.top / 10)
            this.setPos()
            this.travel()
        }, 25)
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
    }
}