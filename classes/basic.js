export default class basic{
    constructor(pv = 10, atk = 1, speed = 1, toStopWalking = 0, shooter = false){
        this.pv = pv
        this.maxPv = pv
        this.speed = speed
        this.atk = atk
        this.toStopWalking = toStopWalking
        this.shooter = shooter
    }
    spawn(){
        console.log('spawn')
    }
}