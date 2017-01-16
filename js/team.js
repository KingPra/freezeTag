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

