import towerStats from '../stats/towerStats.js'
import upgrades from '../ups/upgrades.js'
import { shuffle } from '../tools/utils.js'

class upgradeChosingScreen {
    constructor() {
        this.displayed = false
        this.upgrades = []
        for(let i = 0; i < 3; i++){
            this.upgrades.push({
                div: document.createElement('div'), 
                title: document.createElement('h2'), 
                desc: document.createElement('p'), 
                data: document.createElement('p'),
                malus: document.createElement('p')
            })
        }
    }
    display() {
        this.displayed = true
        towerStats.gameOn = false
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'displayUpgradeChosingScreen'
        shuffle(upgrades)
        for (let i = 0; i < 3; i++) {
            let dom = this.upgrades[i]
            let up = upgrades[i]
            this.div.appendChild(dom.div)
            dom.div.append(dom.title, dom.desc, dom.data, dom.malus)
            dom.title.innerHTML = up.name
            dom.desc.innerHTML = up.desc
            dom.desc.classList.add('desc')
            dom.data.innerHTML = up.towerStats() + ' ' + up.adj + ' → ' + (up.towerStats() + up.add) + ' ' + up.adj
            dom.malus.classList.add('malus')
            if (up.malus) {
                dom.malus.innerHTML = up.malus.towerStats() + ' ' + up.malus.adj + ' → ' + (up.malus.towerStats() + up.malus.add) + ' ' + up.malus.adj
            }else{
                dom.malus.innerHTML = ''
            }


            dom.div.onclick = () => {
                up.func()
                if (up.malus) { up.malus.func() }
                towerStats.gameOn = true
                this.div.remove()
                this.displayed = false
            }
        }
    }
}
let UFC = new upgradeChosingScreen()
export default UFC