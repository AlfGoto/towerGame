import towerStats from "../stats/towerStats.js"
import x2 from '../options/x2.js'

export default class {
    constructor() {
        document.addEventListener('keypress', e => {
            if (e.key === "k") { towerStats.dealDamage(5) }
            if (e.key === " ") { if (x2.speed == 1) { x2.speed = 2 } else x2.speed = 1 }
        })
    }
}