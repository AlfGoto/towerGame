import { randomBetweenTwoInt, distanceToPlayer, angleToPlayer } from "./utils.js"

export default class basic {
    constructor(pv = 10, atk = 1, speed = 10, size = 25, toStopWalking = 0, shooter = false) {
        this.pv = pv
        this.maxPv = pv
        this.speed = 100 / speed
        this.atk = atk
        this.toStopWalking = toStopWalking + 50
        this.shooter = shooter
        this.size = size
        document.documentElement.style.setProperty('--' + this.constructor.name + 'Size', this.size + 'px');

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
        if (distanceToPlayer(this.left, this.top) > this.toStopWalking) {
            this.left = this.left + (angle.left / 100)
            this.top = this.top + (angle.top / 100)
            this.setPos()
            console.log(this.div)


            setTimeout(() => { this.move(angle) }, this.speed)
        }
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
    }
}
