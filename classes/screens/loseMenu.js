import towerStats from '../stats/towerStats.js'
import jeu from '../../script.js'
import upgrades from "../ups/upgrades.js"
import partyUpgrades from "../ups/partyUpgrade.js"

export default class {
    constructor() {
        this.points = 0
    }
    build() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'gameOverScreen'
        towerStats.stopTime()
        
        this.buildHead()
        this.buildBody()
        this.buildFeet()
    }
    buildHead() {
        this.head = document.createElement('div')
        this.div.appendChild(this.head)

        this.title = document.createElement('h1')
        this.title.id = 'title'
        this.title.innerHTML = 'You lost'

        this.pointsP = document.createElement('h2')
        this.pointsP.id = 'points'
        this.setPoints(towerStats.lvl)

        this.head.append(this.title, this.pointsP)
    }
    buildBody() {
        this.body = document.createElement('div')
        this.body.id = 'body'
        this.div.appendChild(this.body)

        let ups = [...upgrades, ...partyUpgrades]

        ups.forEach(e => {
            let div = document.createElement('div')
            this.body.appendChild(div)

            let title = document.createElement('h3')
            let desc = document.createElement('p')
            desc.classList.add('desc')
            let data = document.createElement('p')
            data.classList.add('data')
            let price = document.createElement('p')
            price.classList.add('price')
            div.append(title, desc, data, price)
            title.innerHTML = e.name
            desc.innerHTML = e.desc
            data.innerHTML = e.gameStats() + ' ' + e.adj + ' -> ' + (e.gameStats() + e.add) + ' ' + e.adj
            price.innerHTML = e.price + ' points'
            div.onclick = () => {
                if (this.points >= e.price) {
                    e.upgrade()
                    this.setPoints(-e.price)
                    e.price = e.price * 4
                    price.innerHTML = e.price + ' points'
                    data.innerHTML = e.gameStats() + ' ' + e.adj + ' -> ' + (e.gameStats() + e.add) + ' ' + e.adj
                }
            }
        })
    }
    buildFeet() {
        this.feet = document.createElement('div')
        this.div.appendChild(this.feet)
        this.replayButton = document.createElement('button')
        this.feet.appendChild(this.replayButton)
        this.replayButton.innerHTML = 'Replay !'
        this.replayButton.onclick = () => {
            this.div.remove()
            jeu.startGame()
        }
    }
    setPoints(arg) {
        this.points += arg
        this.pointsP.innerHTML = this.points + ' points'
    }
}