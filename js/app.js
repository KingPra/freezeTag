
let Player = require('./player');
let Team = require('./team');
window.addEventListener('load', function () {

});


let playerList = [
    new Player('Bob'),
    new Player('Tom'),
    new Player('Jim'),
    new Player('Wang'),
    new Player('Thomas'),
    new Player('Earl'),
]



    let team = new Team;
    team.addChasers(playerList[0]);
    team.addChasers(playerList[1]);
    team.addRunners(playerList[2]);
    team.addChasers(playerList[3]);
    team.addRunners(playerList[4]);
    team.addRunners(playerList[5]);
    //team.announce();

console.log(playerList[2].name + '\'s frozen status is ' + playerList[0].tag(playerList[2]) );
console.log(playerList[2]);
console.log(playerList[0]);
console.log(playerList[5].name + '\'s frozen status is ' + playerList[2].tag(playerList[5]) );
// function tag(player) {
//     if(chasers.Player)
// }