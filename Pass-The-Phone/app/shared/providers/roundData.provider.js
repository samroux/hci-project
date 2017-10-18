"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoundDataProvider = /** @class */ (function () {
    function RoundDataProvider() {
        this.players = [];
        this.teams = [];
        this.answerCount = 1;
    }
    // Return a player that haven't played more than authorizes times
    // Returns null if no elligible player. Hence need to go to summary page
    RoundDataProvider.prototype.getRandomPlayer = function () {
        var elligiblePlayers = [];
        var j = 0;
        //populate elligible players array
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].answerCount < this.answerCount) {
                elligiblePlayers[j] = this.players[i];
                j++;
            }
        }
        if (j == 0) {
            return null;
        }
        else {
            var random = Math.floor(Math.random() * j);
            return elligiblePlayers[random];
        }
    };
    RoundDataProvider.prototype.calculateTeamCount = function () {
        var teamCount = 0;
        if ((this.players.length % 2 == 0 || this.players.length % 3 == 0) && this.players.length > 3) {
            //team creation of 2 or 3 player is possible
            if (this.players.length % 3 == 0) {
                //teams of 3 will be created
                teamCount = this.players.length / 3;
            }
            else {
                //teams of 2 will be created
                teamCount = this.players.length / 2;
            }
            return teamCount;
        }
        else {
            // no team creation is possible
            return 0;
        }
    };
    RoundDataProvider.prototype.getExistingAndRemainingPlayers = function (team) {
        var noTeamPlayers = [];
        var j = 0;
        //populate elligible players array
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].team == null /*|| this.players[i].team == team*/) {
                noTeamPlayers[j] = this.players[i];
                j++;
            }
        }
        return noTeamPlayers;
    };
    RoundDataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RoundDataProvider);
    return RoundDataProvider;
}());
exports.RoundDataProvider = RoundDataProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmREYXRhLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91bmREYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUzNDO0lBZ0JJO1FBWE8sWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUN4QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBUWxCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUV2QixpRUFBaUU7SUFDakUsd0VBQXdFO0lBQ2pFLDJDQUFlLEdBQXRCO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0NBQWtDO1FBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTSw4Q0FBa0IsR0FBekI7UUFDSSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLDRDQUE0QztZQUM1QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUEsQ0FBQztnQkFDNUIsNEJBQTRCO2dCQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFckIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsK0JBQStCO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO0lBRUwsQ0FBQztJQUVNLDBEQUE4QixHQUFyQyxVQUFzQyxJQUFJO1FBQ3RDLElBQUksYUFBYSxHQUFjLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixrQ0FBa0M7UUFDbEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxtQ0FBb0MsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xFLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztZQUNSLENBQUM7UUFDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN4QixDQUFDO0lBMUVRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQTJFN0I7SUFBRCx3QkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vdHJpdmlhUXVlc3Rpb25cIjtcbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4uL3RlYW1cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vZ3JvdXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdW5kRGF0YVByb3ZpZGVyIHtcbiAgICBcbiAgICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uOyBcbiAgICBwdWJsaWMgY3VycmVudFBsYXllcjogUGxheWVyO1xuICAgIHB1YmxpYyBncm91cDogR3JvdXA7XG4gICAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgIHB1YmxpYyB0ZWFtcyA6IFRlYW1bXSA9IFtdO1xuXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiAgICBcbiAgICBwdWJsaWMgc3ViamVjdElkOiBzdHJpbmc7XG4gICAgXG4gICAgcHVibGljIGdhbWVNb2RlOiBzdHJpbmc7XG4gICAgXG4gICAgcmVhZG9ubHkgYW5zd2VyQ291bnQ6bnVtYmVyID0gMTtcbiAgICBcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxuICAgIFxuICAgIC8vIFJldHVybiBhIHBsYXllciB0aGF0IGhhdmVuJ3QgcGxheWVkIG1vcmUgdGhhbiBhdXRob3JpemVzIHRpbWVzXG4gICAgLy8gUmV0dXJucyBudWxsIGlmIG5vIGVsbGlnaWJsZSBwbGF5ZXIuIEhlbmNlIG5lZWQgdG8gZ28gdG8gc3VtbWFyeSBwYWdlXG4gICAgcHVibGljIGdldFJhbmRvbVBsYXllcigpe1xuICAgICAgICB2YXIgZWxsaWdpYmxlUGxheWVycyA6IFBsYXllcltdID0gW107XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vcG9wdWxhdGUgZWxsaWdpYmxlIHBsYXllcnMgYXJyYXlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8dGhpcy5wbGF5ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzW2ldLmFuc3dlckNvdW50PHRoaXMuYW5zd2VyQ291bnQpe1xuICAgICAgICAgICAgICAgIGVsbGlnaWJsZVBsYXllcnNbal09dGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoaiA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqKTsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZWxsaWdpYmxlUGxheWVyc1tyYW5kb21dO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBjYWxjdWxhdGVUZWFtQ291bnQoKXtcbiAgICAgICAgbGV0IHRlYW1Db3VudCA9IDA7XG4gICAgICAgIGlmKCAodGhpcy5wbGF5ZXJzLmxlbmd0aCUyID09IDAgfHwgdGhpcy5wbGF5ZXJzLmxlbmd0aCUzID09IDAgKSAmJiB0aGlzLnBsYXllcnMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy90ZWFtIGNyZWF0aW9uIG9mIDIgb3IgMyBwbGF5ZXIgaXMgcG9zc2libGVcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVycy5sZW5ndGglMyA9PSAwICl7XG4gICAgICAgICAgICAgICAgLy90ZWFtcyBvZiAzIHdpbGwgYmUgY3JlYXRlZFxuICAgICAgICAgICAgICAgIHRlYW1Db3VudCA9IHRoaXMucGxheWVycy5sZW5ndGgvMztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vdGVhbXMgb2YgMiB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICB0ZWFtQ291bnQgPSB0aGlzLnBsYXllcnMubGVuZ3RoLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVhbUNvdW50O1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy8gbm8gdGVhbSBjcmVhdGlvbiBpcyBwb3NzaWJsZVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRFeGlzdGluZ0FuZFJlbWFpbmluZ1BsYXllcnModGVhbSk6IFBsYXllcltde1xuICAgICAgICB2YXIgbm9UZWFtUGxheWVycyA6IFBsYXllcltdID0gW107XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgXG4gICAgICAgIC8vcG9wdWxhdGUgZWxsaWdpYmxlIHBsYXllcnMgYXJyYXlcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8dGhpcy5wbGF5ZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzW2ldLnRlYW0gPT0gbnVsbCAvKnx8IHRoaXMucGxheWVyc1tpXS50ZWFtID09IHRlYW0qLyApe1xuICAgICAgICAgICAgICAgIG5vVGVhbVBsYXllcnNbal09dGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICByZXR1cm4gbm9UZWFtUGxheWVycztcbiAgICB9XG59Il19