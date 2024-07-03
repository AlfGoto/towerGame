import towerStats from './towerStats.js'

export class bullet {
    constructor(angle) {
        this.angle = angle
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
        setTimeout(() => {
            if (this.alive) {
                this.left = this.left + (this.angle.left / 10)
                this.top = this.top + (this.angle.top / 10)
                this.setPos()
                this.travel()
            }
        }, 25)
    }
    setPos() {
        this.div.style.left = this.left + 'px'
        this.div.style.top = this.top + 'px'
    }
}