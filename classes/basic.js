import { randomBetweenTwoInt, distanceToPlayer, angleToPlayer } from "./utils.js"
import towerStats from './towerStats.js'

export default class basic {
    constructor(obj) {
        this.pv = obj.pv || 1
        this.maxPv = obj.pv || 1
        this.speed = 100 / obj.speed || 100 / 10
        this.atk = obj.atk || 1
        this.toStopWalking = obj.toStopWalking + 50 || 50
        this.shooter = obj.shooter || false
        this.size = obj.size || 25
        this.xp = obj.xp || 1

        document.documentElement.style.setProperty('--' + this.constructor.name + 'Size', this.size + 'px');
        this.canBeGreenZoned = true

        this.spawn()
    }
    spawn() {
        let y = randomBetweenTwoInt(-this.size, window.innerHeight + this.size)
        let x = randomBetweenTwoInt(-this.size, window.innerWidth + this.size)
        switch (randomBetweenTwoInt(1, 4)) {
            //up
            case 1: this.create(-this.size, x); break;
            //down
            case 2: this.create(window.innerHeight + this.size, x); break;
            //left
            case 3: this.create(y, -this.size); break;
            //right
            case 4: this.create(y, window.innerWidth + this.size); break;
        }
    }
    create(top, left) {
        this.top = top
        this.left = left
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.classList.add(this.constructor.name)
        this.div.classList.add('ennemy')
        this.setPos()

        this.move(angleToPlayer(this.left, this.top))
    }
    move(angle) {
        // if (!towerStats.gameOn) { return }
        if (!towerStats.gameOn) { setTimeout(() => { this.move(angle) }, this.speed); return }
        if (this.pv <= 0) { return }
        let distance = distanceToPlayer(this.left, this.top)

        if(this.canBeGreenZoned && towerStats.greenZone > 0 && distance > 160 && distance < 170){
            this.dealDamage(towerStats.greenZone)
            this.canBeGreenZoned = false
            setTimeout(() => { this.move(angle) }, this.speed)
            return
        }




        if (distanceToPlayer(this.left, this.top) > this.toStopWalking) {
            this.left = this.left + (angle.left / 100)
            this.top = this.top + (angle.top / 100)
            this.setPos()

            if (!towerStats.closest || distance < towerStats.closestDistance) {
                towerStats.closest = this
                towerStats.closestDistance = distance
            }


            setTimeout(() => { this.move(angle) }, this.speed)
        } else {
            this.div.remove()
            towerStats.enemies.splice(towerStats.enemies.indexOf(this), 1)
            towerStats.dealDamage(1)
            if (towerStats.closest == this) towerStats.closestDistance = 1500
        }
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
        this.div.innerHTML = this.pv
    }
    dealDamage(arg) {
        // towerStats.closest = null
        towerStats.closestDistance = 1500
        this.div.classList.add('shake')
        this.pv = this.pv - arg
        this.setPos()
        if (this.pv < 1) {
            towerStats.enemies.splice(towerStats.enemies.indexOf(this), 1)
            this.div.remove()
            towerStats.addXp(this.xp)
        }
        setTimeout(()=>{this.div.classList.remove('shake')},200)
    }
}