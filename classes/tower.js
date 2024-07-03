export default class tower {
    constructor() {
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'tower'
        this.div.style.top = (window.innerHeight / 2) + 'px'
        this.div.style.left = (window.innerWidth / 2) + 'px'

        this.size = 50

        document.documentElement.style.setProperty('--sizeTower', this.size + 'px');

        this.init()
    }
    init(){
        console.log('Tower is up')
    }
}