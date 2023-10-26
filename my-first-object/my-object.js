const myTom = {
 name : 'Tom' ,
 color : 'white' ,
 age : 0 ,
 eyes : 'green' ,
 weight : 50 ,
 points : 0 ,
 specifications : {
    sleep : 100 ,
    play : 100 ,
    energy : 100 ,
    meal : 100 ,
    mood : 100
 } ,
 getStatus : function() {
    console.log(`Еда: ${this.meal < 50 ? 'Покорми Меня' : 'Не хочу есть'} , Энергия: ${this.energy < 50 ? 'Ничего не хочу делать' : 'На всё готов'} , Настроение: ${this.mood < 50 ? 'Я несчастлив' : 'УРААААААААА'} , Игрa: ${this.game < 50 ? 'Хочу играть' : 'Надело играть'} , Отдых: ${this.sleep < 50 ? 'Хочу спать' : 'НЕ ХОЧУ'}`)
 } ,
 playing : function () {
    this.energy -= 15;
    this.points += 200
    this.mood += 20
    return `СЮДААААААА`
 } ,
 eating : function () {
    this.meal += 40
    this.weight += 5
    this.energy += 3
    this.points += 100
 } ,
 growing : function (points) {
   if (this.points === 3000) {
    this.age++
    return `Уже год`
   }else{ 
   if (this.points === 8000) {
    this.age++
    return 'Уже как два года'
   }else{ 
   if (this.points === 10000) {
    this.age++
    return 'Вам недолго ещё осталось'
   }
 }
}
} ,
sleeping : function () {
    this.energy += 30
    this.play -= 10 
    this.mood += 3
    this.points += 100
}
}