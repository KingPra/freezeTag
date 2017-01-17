
let Player = require('./player');
let Team = require('./team');
let Won = require('./won');
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
let c0 = playerList[0];
let c1 = playerList[1];
let c2 = playerList[2];
let r1 = playerList[3];
let r2 = playerList[4];
let r3 = playerList[5];

    let team = new Team;
    team.addChasers(playerList[0]);
    team.addChasers(playerList[1]);
    team.addChasers(playerList[2]);
    team.addRunners(playerList[3]);
    team.addRunners(playerList[4]);
    team.addRunners(playerList[5]);
    team.announce();

console.log(c1.tag(r1));
console.log('runner not frozen ' + r3.tag(r2));
console.log(r1);
console.log(c1.tag(r2));
console.log(r2);
console.log(r2.tag(r1));
console.log('should unfreeze ' + r3.tag(r2))
console.log('line 38 ' + r3.tag(r1));
console.log('chaser tagged by runner ' + r1.tag(c2));
console.log('chaser tags a chaser ' + c1.tag(c2))
console.log(c2.tag(r1));
console.log('get flag function ' + r1.getFlag());
console.log('chaser getting flag ' + c1.getFlag());
console.log(c1.tag(r1))
console.log(r2.getFlag());
console.log(Won(playerList));
// function tag(player) {
//     if(chasers.Player)
// }

