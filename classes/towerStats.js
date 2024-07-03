export default {
    gameOn: true,
    hp: 10,
    maxHp: 10,
    dealDamage: function(arg){
        if(this.hp - arg < 1){
            this.hp = 0
            this.gameOn = false
        }else{
            this.hp = this.hp - arg
        }
    }
}