import towerStats from "../stats/towerStats.js"
import x2 from '../options/x2.js'

export default class {
    constructor() {
        this.pause = false
        document.addEventListener('keydown', e => {
            // console.log(e)
            if (e.key === "k") { towerStats.dealDamage(5) }
            if (e.key === " ") { if (x2.speed == 1) { x2.speed = 2 } else x2.speed = 1 }
            if (e.key === "Escape") {
                if (this.pause) {
                    towerStats.gameOn = true
                } else {
                    towerStats.gameOn = false
                }
                this.pause = !this.pause
            }
        })
    }
}