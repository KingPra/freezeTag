
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

