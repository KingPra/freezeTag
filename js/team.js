// this module is currently still very confusing. Got lots of help from leo and noah on this one.
module.exports = function Team(name) {
    this.name = name;
    this.roster = [];

    this.add = function (recruit) {
        this.roster.push(recruit);
        recruit.team = this.name;
    };

    this.beat = function (enemy) {
        if(this.name === 'chasers') {
            for (let i = 0; i < enemy.roster.length; i++) {
                if(enemy.roster[i].isFrozen === false) {
                    return 'chasers did not win';
                }
            }
            return 'chasers won';
        }

        if(this.name === 'runners') {
            for (let i = 0; i < this.roster.length; i++) {
                if(this.roster[i].flag === true) {
                    return 'runners won';
                }
            }
            return 'runners did not win';
        }
    }
    return this;
};



//     let chasers = [];
//     let runners = [];

//     let players = {
//         addChasers: function (name) {
//             chasers.push(name);
//             return name.team = 'chasers';
//         },
//         addRunners: function (name) {
//             runners.push(name);
//             return name.team = 'runners';
//         },
//         announce: function () {
//             for (let i = 0; i < chasers.length; i++) {
//                 console.log(chasers[i]);
//             }
//             for (let i = 0; i < runners.length; i++) {
//                 console.log(runners[i]);
//             }
//         },

//     };
//     return players;

 //}

