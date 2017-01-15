
let Player = require('./player');
let Team = require('./team');
window.addEventListener('load', function () {

    console.log('ready to rock');
});


let playerList = [
    new Player('Bob'),
    new Player('Tom'),
    new Player('Jim'),
    new Player('Wang'),
    new Player('Thomas'),
    new Player('Earl'),
]

console.log(playerList[0].team);


    let team = new Team;
    team.addChasers(playerList[0]);
    team.addChasers(playerList[1]);
    team.addRunners(playerList[2]);
    //team.announce();

console.log(playerList);
// function tag(player) {
//     if(chasers.Player)
// }