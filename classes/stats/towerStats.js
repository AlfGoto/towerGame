import x2 from "../options/x2.js"
import upgradeChosingScreen from "../screens/upgradeChosingScreen.js"

export default {
    //STATE OF THE GAME
    gameOn: true,
    time: 0,
    startTime: function () { this.timeLoop() },
    timeLoop: function () {
        if (this.gameOn) this.time++;
        if (!this.stop) {
            setTimeout(() => { this.timeLoop() }, 1000 / x2.speed)
        } else this.stop = false
    }, 
    stopTime: function () { this.stopTime = true },
    stop: false,
    delayDiviser: 0.9990,


    //TOWER
    hp: 10,
    maxHp: 10,
    dealDamage: function (arg) {
        if (this.hp - arg < 1) {
            this.hp = 0
            this.gameOn = false
        } else { this.hp = this.hp - arg }
        document.getElementById('hpP').innerHTML = this.hp
    },
    bullets: [],
    range: 1000,


    //ENEMIES
    closest: undefined,
    closestDistance: 2000,
    enemies: [],



    //XP
    xp: 0,
    maxXp: 5,
    lvl: 100,
    addXp: function (arg) {
        if (this.xp + arg >= this.maxXp) {
            this.lvl++
            this.xp = this.xp + arg - this.maxXp
            this.maxXp = Math.round(this.maxXp * 1.5)
            if (this.gameOn) upgradeChosingScreen.display()
        } else { this.xp = this.xp + arg }
        document.documentElement.style.setProperty('--progress', Math.round((this.xp / this.maxXp) * 100));
    },
    resetXp: function () {
        this.xp = 0
        this.lvl = 1
        document.documentElement.style.setProperty('--progress', Math.round((this.xp / this.maxXp) * 100));
    },


    //UPGRADES
    greenZone: 0,
    greenZoneRepeat: 1,
    greenZoneXp: 1,
    damage: 1,
    shootingSpeed: 1,
    addHp: function (arg) {
        this.hp += arg
        this.maxHp += arg
        document.getElementById('hpP').innerHTML = this.hp
    },
    piercing: 0,
    eventail: 1,
    multishoot: 1,
    bulletChild: 0,

}