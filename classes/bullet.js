import { distanceToTarget } from './utils.js'
import towerStats from './towerStats.js'

export class bullet {
    constructor(angle, multiShoot = towerStats.multishoot) {
        this.angle = angle
        this.piercing = towerStats.piercing
        this.div = document.createElement('div')
        this.div.classList.add('bullet')
        document.body.appendChild(this.div)
        this.left = window.innerWidth / 2
        this.top = window.innerHeight / 2
        this.setPos()
        this.alreadyTouched = []

        this.alive = true
        this.travel()
        setTimeout(() => { this.div.remove(); this.alive = false }, 3000)

        if(multiShoot > 0){setTimeout(()=>{towerStats.bullets.push(new bullet(angle, multiShoot - 1))}, 75)}
    }
    travel() {
        if (!this.alive) return
        for (const foe of towerStats.enemies) {
            if (distanceToTarget(this.left, this.top, foe.left, foe.top) < 21) {
                if(this.alreadyTouched.includes(foe))continue

                foe.dealDamage(towerStats.damage)

                if (this.piercing === 0) {
                    this.alive = false
                    this.alreadyTouched = []
                    this.div.remove();
                } else {
                    this.alreadyTouched.push(foe)
                    this.piercing--
                    break;
                }
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