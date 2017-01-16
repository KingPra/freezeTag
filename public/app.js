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
},{"./player":2,"./team":3}],2:[function(require,module,exports){

module.exports = function Player (person) {
    this.name = person;
    this.isFrozen = false;
    this.flag = false;
    this.team = null;

    this.tag = function(runner) {
        if(this.team === 'chasers') {
        return runner.isFrozen = true;
        } else {
            if(this.team === 'runners' && this.isFrozen === 'false') {
                return runner.isFrozen = false;
            } else {
                return runner.isFrozen;
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
