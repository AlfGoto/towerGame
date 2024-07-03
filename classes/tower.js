import towerStats from './towerStats.js'
import { bullet } from './bullet.js'

export default class tower {
    constructor() {


        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'tower'
        this.div.style.top = (window.innerHeight / 2) + 'px'
        this.div.style.left = (window.innerWidth / 2) + 'px'


        this.hpP = document.createElement('p')
        this.div.appendChild(this.hpP)
        this.updateHp()

        this.size = 75
        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.bullets = []

        this.init()
    }
    init() {
        console.log('Tower is up')
        setInterval(() => { this.updateHp() }, 100)

        this.setTarget()
    }
    updateHp() {
        this.hp = towerStats.hp
        this.hpP.innerHTML = this.hp
    }
    setTarget() {
        if (towerStats.gameOn) setTimeout(() => {
            console.log(towerStats.closest)
            if (towerStats.closest) this.bullets.push(new bullet(towerStats.closest))
            this.setTarget()
        }, 2000 / towerStats.shootingSpeed)
    }
}