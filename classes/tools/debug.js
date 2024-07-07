import towerStats from "../stats/towerStats.js"

export default class {
    constructor() {
        document.addEventListener('keypress', e => {
            if (e.key === "k") { towerStats.dealDamage(5) }
        })
    }
}