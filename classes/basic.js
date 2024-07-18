import { randomBetweenTwoInt, distanceToPlayer, angleToPlayer } from "./tools/utils.js"
import towerStats from "./stats/towerStats.js"
import x2 from "./options/x2.js"
import foe from './three/foe.js'


export default class basic {
    constructor(obj) {
        this.pv = obj.pv || 1
        this.maxPv = obj.pv || 1
        this.speed = 100 / obj.speed || 100 / 10
        this.atk = obj.atk || 1
        this.toStopWalking = obj.toStopWalking + 50 || 50
        this.shooter = obj.shooter || false
        this.size = obj.size || 25
        this.xp = obj.xp || Math.ceil(this.pv / 5)
        this.class = obj.class || 'basic'

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
        this.three = new foe(left, top, this.class, this.maxPv)


        this.top = top
        this.left = left
        this.div = document.createElement('div')
        // if (this.color) this.div.style.backgroundColor = this.color
        document.body.appendChild(this.div)
        // this.div.classList.add(this.class || this.constructor.name)
        this.div.classList.add('ennemy')
        this.setPos()

        this.div.object = this

        this.angle = angleToPlayer(this.left, this.top)
        this.move()
        window.addEventListener('resize', () => { this.angle = angleToPlayer(this.left, this.top) })
    }
    move() {
        if (!towerStats.gameOn) { setTimeout(() => { this.move() }, this.speed / x2.speed); return }
        if (this.pv <= 0) { return }
        let distance = distanceToPlayer(this.left, this.top)

        if (this.canBeGreenZoned && towerStats.greenZone > 0 && distance > 160 && distance < 170) {
            this.greenZoneDamage()
            this.canBeGreenZoned = false
            setTimeout(() => { this.move() }, this.speed / x2.speed)
            return
        }




        if (distanceToPlayer(this.left, this.top) > this.toStopWalking) {
            this.left = this.left + (this.angle.left / 100)
            this.top = this.top + (this.angle.top / 100)
            this.setPos()

            if (!towerStats.closest || distance < towerStats.closestDistance) {
                towerStats.closest = this
                towerStats.closestDistance = distance
            }


            setTimeout(() => { this.move() }, this.speed / x2.speed)
        } else {
            this.div.remove()
            this.three.remove()
            towerStats.enemies.splice(towerStats.enemies.indexOf(this), 1)
            towerStats.dealDamage(Math.ceil(this.xp / 20))
            if (towerStats.closest == this) towerStats.closestDistance = 1500
        }
    }
    setPos() {
        this.three.move(this.left, this.top)
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
        // this.div.innerHTML = this.pv
        this.three.updateText(this.pv)
    }
    dealDamage(arg, greenzoned = false) {
        towerStats.closestDistance = 1500
        // this.div.classList.add('shake')
        this.pv = this.pv - arg
        this.setPos()
        if (this.pv < 1) {
            towerStats.enemies.splice(towerStats.enemies.indexOf(this), 1)
            this.div.remove()
            this.three.remove()
            if (greenzoned) { towerStats.addXp(this.xp * towerStats.greenZoneXp) } else towerStats.addXp(this.xp)
        }
        setTimeout(() => { this.div.classList.remove('shake') }, 200)
    }
    kill() {
        this.pv = 0
        towerStats.enemies.splice(towerStats.enemies.indexOf(this), 1)
        this.div.remove()
        this.three.remove()
        // towerStats.addXp(this.xp)
        towerStats.closestDistance = 1500
    }
    greenZoneDamage(nbLeft = towerStats.greenZoneRepeat) {
        this.dealDamage(towerStats.greenZone, true)
        nbLeft--
        if (nbLeft > 0) setTimeout(() => { this.greenZoneDamage(nbLeft) }, 100 / x2.speed)
    }
}