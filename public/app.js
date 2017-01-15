(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{"./player":2,"./team":3}],2:[function(require,module,exports){

module.exports = function Player (name) {
    this.name = name;
    this.isFrozen = false;
    this.flag = false;
    this.team = null;

    // this.tag = function(tagger, runner) {
    //     if(tagger.team === 'chaser') {
    //     return player.isFrozen = true;
    //     } else {
    //         if(tagger.team === 'runner') {
    //             return player.isFrozen = false;
    //         }
    //     }
    // };
    this.tagged = function (status) {
        return status.isFrozen = true;
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
// console.log(chasers);
// console.log(runners);
return players;

}


},{}]},{},[1]);
