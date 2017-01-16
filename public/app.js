(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
    //team.announce();

console.log(c1.tag(r1));
console.log(r1);
console.log(c1.tag(r2));
console.log(r2);
console.log(r2.tag(r1));
console.log('should unfreeze ' + r3.tag(r2))
console.log('line 38 ' + r3.tag(r1));
console.log('chaser tagged by runner ' + r1.tag(c2));
console.log('chaser tags a chaser ' + c1.tag(c2))
// function tag(player) {
//     if(chasers.Player)
// }
},{"./player":2,"./team":3}],2:[function(require,module,exports){

module.exports = function Player (person) {
    this.name = person;
    this.isFrozen = false;
    this.flag = false;
    this.team = null;


// tagging funciton
    this.tag = function(runner) {
        // a runner is frozen if tagged by a chaser or if runner accidently tags a chaser
        if(this.team === 'chasers' && runner.team === 'runners' || this.team === 'runners' && runner.team === 'chasers') {
            runner.isFrozen = true;
         return runner.name + ' was frozen by ' + this.name;
        } else {
            // this statement lets a runner unfreeze another runner
            if(this.team === 'runners' && this.isFrozen === false && runner.team === 'runners') {
                runner.isFrozen = false;
                console.log('line 15 = ' + runner.name);
                return runner.name + ' was unfrozen by ' + this.name;
            } else {
                // this statement console.logs if runner is frozen and tries to unfreeze another frozen runner
                if(this.team === 'runners' && this.isFrozen === true) {
                    console.log(' tagger is frozen ');
                    runner.isFrozen;
                    return this.name + ' can\'t unfreeze ' + runner.name + ' because ' + this.name + ' is currently frozen ';
                    //  this statement runs if a chaser tags a chaser
                 }  else {
                        runner.isFrozen;
                        return 'nothing happened';
                }
            }
        }
    };
}


},{}],3:[function(require,module,exports){
module.exports = function Team() {
    let chasers = [];
    let runners = [];

    let players = {
        addChasers: function (name) {
            chasers.push(name);
            return name.team = 'chasers';
        },
        addRunners: function (name) {
            runners.push(name);
            return name.team = 'runners';
        },
        announce: function () {
            for (let i = 0; i < chasers.length; i++) {
                console.log(chasers[i] + ' is a chaser');
            }
            for (let i = 0; i < runners.length; i++) {
                console.log(runners[i] + ' is a runner');
            }
        },
};
return players;

}


},{}]},{},[1]);
