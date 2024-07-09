import towerStats from "../stats/towerStats.js"
import pause from "../screens/pause.js"
import x2 from '../options/x2.js'

export default class {
    constructor() {
        this.pause = false
        document.addEventListener('keydown', e => {
            // console.log(e)
            if (e.key === "k") { towerStats.dealDamage(5) }
            if (e.key === " ") { if (x2.speed == 1) { x2.speed = 2 } else x2.speed = 1; console.log(`Speed is now: ${x2.speed}`); }
            if (e.key === "Escape") { pause.display() }
        })
    }
}