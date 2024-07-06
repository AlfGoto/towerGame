import upgradeChosingScreen from "./upgradeChosingScreen.js"

export default {
    //STATE OF THE GAME
    gameOn: true,
    time: 0,
    startTime: function(){this.timeInterval = setInterval(()=>{if(this.gameOn)this.time++},1000)},
    stopTime: function(){clearInterval(this.timeInterval)},


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
            if(this.gameOn)upgradeChosingScreen.display()
        } else { this.xp = this.xp + arg }
        document.documentElement.style.setProperty('--progress', Math.round((this.xp / this.maxXp) * 100));
    },
    resetXp: function(){
        this.xp = 0
        this.lvl = 1
        document.documentElement.style.setProperty('--progress', Math.round((this.xp / this.maxXp) * 100));
    },


    //UPGRADES
    greenZone: 0,
    damage: 1,
    shootingSpeed: 1,
    addGreenZoneDamage: function(arg){
        if(this.greenZone == 0)document.documentElement.style.setProperty('--greenZoneColor',  '#a6ff80');
        this.greenZone += arg
    },
    addHp: function(arg){
        this.hp += arg
        this.maxHp += arg
        document.getElementById('hpP').innerHTML = this.hp
    },
    piercing: 0,
    eventail: 0,
    multishoot: 1,
    bulletChild: 0,

}