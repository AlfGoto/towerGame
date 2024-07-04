import upgrades from './upgrades.js'
import { shuffle } from './utils.js'

class upgradeChosingScreen {
    constructor() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'displayUpgradeChosingScreen'

        this.upgrades = [
            { div: document.createElement('div'), title: document.createElement('h2'), desc: document.createElement('p') },
            { div: document.createElement('div'), title: document.createElement('h2'), desc: document.createElement('p') },
            { div: document.createElement('div'), title: document.createElement('h2'), desc: document.createElement('p') }
        ]
        for (let i = 0; i < 3; i++) {
            this.div.appendChild(this.upgrades[i].div)
            this.upgrades[i].div.appendChild(this.upgrades[i].title)
            this.upgrades[i].div.appendChild(this.upgrades[i].desc)
        }
        this.hide()
    }
    display() {
        console.log(this.div)
        shuffle(upgrades)
        for (let i = 0; i < 3; i++) {
            console.log(this.upgrades[i])
            console.log(upgrades[i])
            this.upgrades[i].title.innerHTML = upgrades[i].name
            this.upgrades[i].desc.innerHTML = upgrades[i].desc
            this.upgrades[i].div.onclick = () => {
                upgrades[i].func()
                this.hide()
            }
        }
        this.show()
    }
    hide() { this.div.style.display = 'none' }
    show() { this.div.style.display = 'flex' }
}
let UFC = new upgradeChosingScreen()
export default UFC