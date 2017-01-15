
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
 