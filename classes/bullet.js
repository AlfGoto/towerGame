import { distanceToTarget, randomBetweenTwoInt } from './tools/utils.js'
import towerStats from './stats/towerStats.js'
import x2 from './options/x2.js'

export class bullet {
    constructor(obj) {
        this.angle = obj.angle
        this.child = obj.child || false
        this.multiShoot = obj.multiShoot || towerStats.multishoot
        this.left = obj.left || window.innerWidth / 2
        this.top = obj.top || window.innerHeight / 2
        this.alreadyTouched = obj.alreadyTouched || []

        this.angle = this.angle
        this.piercing = towerStats.piercing
        this.div = document.createElement('div')
        this.div.classList.add('bullet')
        if (this.child) this.div.classList.add('child')
        document.body.appendChild(this.div)
        this.setPos()

        this.foeArray = Array.from(document.getElementsByClassName('ennemy'))

        this.alive = true
        this.travel()
        if(towerStats.range > 0){
            setTimeout(() => { this.div.remove(); this.alive = false; towerStats.bullets = [] }, towerStats.range / x2.speed)
        }else{
            setTimeout(() => { this.div.remove(); this.alive = false; towerStats.bullets = [] }, 0)
        }

        if (this.multiShoot > 1 && !this.child) { setTimeout(() => { towerStats.bullets.push(new bullet({ angle: this.angle, multiShoot: this.multiShoot - 1 })) }, 75) }
    }
    travel() {
        if (!this.alive) return
        for (let foe of this.foeArray) {
            foe = foe.object
            if (distanceToTarget(this.left, this.top, foe.left, foe.top) < 30 ) {
                if (this.alreadyTouched.includes(foe)) continue

                foe.dealDamage(towerStats.damage, false)

                if (!this.child) {
                    let childrenLeft = towerStats.bulletChild
                    while (childrenLeft > 0) {
                        childrenLeft--
                        let top = randomBetweenTwoInt(-100, 100)
                        let left = 100 - Math.abs(top)
                        if (Math.random() > 0.5) left *= -1
                        towerStats.bullets.push(new bullet({ angle: { top: top, left: left }, child: true, top: foe.top, left: foe.left, alreadyTouched: [foe] }))
                    }
                }

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
            if(towerStats.gameOn){
                this.left = this.left + (this.angle.left / 5)
                this.top = this.top + (this.angle.top / 5)
                this.setPos()
            }
            this.travel()
        }, 20 / x2.speed)
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
    }
}