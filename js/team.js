// this module is currently still very confusing. Got lots of help from leo and noah on this one.
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
                console.log(chasers[i]);
            }
            for (let i = 0; i < runners.length; i++) {
                console.log(runners[i]);
            }
        },

    };
    return players;

}

