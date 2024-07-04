import upgradeChosingScreen from "./upgradeChosingScreen.js"

export default {
    //STATE OF THE GAME
    gameOn: true,
    time: 0,
    startTime: function(){setInterval(()=>{this.time++},1000)},


    //HP
    hp: 10,
    maxHp: 10,
    dealDamage: function (arg) {
        if (this.hp - arg < 1) {
            this.hp = 0
            this.gameOn = false
        } else { this.hp = this.hp - arg }
        document.getElementById('hpP').innerHTML = this.hp
    },


    //ENEMIES
    closest: undefined,
    closestDistance: 100000,
    enemies: [],



    //XP
    xp: 0,
    maxXp: 5,
    lvl: 1,
    addXp: function (arg) {
        if (this.xp + arg >= this.maxXp) {
            this.lvl++
            this.xp = this.xp + arg - this.maxXp
            this.maxXp = Math.round(this.maxXp * 1.5)
            upgradeChosingScreen.display()
        } else { this.xp = this.xp + arg }
        document.documentElement.style.setProperty('--progress', Math.round((this.xp / this.maxXp) * 100));
    },


    //UPGRADES
    greenZone: 0,
    damage: 1,
    shootingSpeed: 1,

}