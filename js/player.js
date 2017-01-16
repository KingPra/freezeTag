
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