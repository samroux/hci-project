"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoundDataProvider = /** @class */ (function () {
    function RoundDataProvider() {
        this.players = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmREYXRhLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91bmREYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUTNDO0lBWUk7UUFQTyxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBS3RCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUV2QixpRUFBaUU7SUFDakUsd0VBQXdFO0lBQ2pFLDJDQUFlLEdBQXRCO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0NBQWtDO1FBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFFTSw4Q0FBa0IsR0FBekI7UUFDSSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFBLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLDRDQUE0QztZQUM1QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUEsQ0FBQztnQkFDNUIsNEJBQTRCO2dCQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRiw0QkFBNEI7Z0JBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFckIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsK0JBQStCO1lBQy9CLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO0lBRUwsQ0FBQztJQUVNLDBEQUE4QixHQUFyQyxVQUFzQyxJQUFJO1FBQ3RDLElBQUksYUFBYSxHQUFjLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFVixrQ0FBa0M7UUFDbEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxtQ0FBb0MsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xFLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsQ0FBQztZQUNSLENBQUM7UUFDTCxDQUFDO1FBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN4QixDQUFDO0lBdEVRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXVFN0I7SUFBRCx3QkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vdHJpdmlhUXVlc3Rpb25cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vZ3JvdXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdW5kRGF0YVByb3ZpZGVyIHtcbiAgICBcbiAgICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uOyBcbiAgICBwdWJsaWMgY3VycmVudFBsYXllcjogUGxheWVyO1xuICAgIHB1YmxpYyBncm91cDogR3JvdXA7XG4gICAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgIHB1YmxpYyBzdWJqZWN0SWQ6IHN0cmluZztcbiAgICBcbiAgICBwdWJsaWMgZ2FtZU1vZGU6IHN0cmluZztcbiAgICBcbiAgICByZWFkb25seSBhbnN3ZXJDb3VudDpudW1iZXIgPSAxO1xuICAgIFxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHt9XG4gICAgXG4gICAgLy8gUmV0dXJuIGEgcGxheWVyIHRoYXQgaGF2ZW4ndCBwbGF5ZWQgbW9yZSB0aGFuIGF1dGhvcml6ZXMgdGltZXNcbiAgICAvLyBSZXR1cm5zIG51bGwgaWYgbm8gZWxsaWdpYmxlIHBsYXllci4gSGVuY2UgbmVlZCB0byBnbyB0byBzdW1tYXJ5IHBhZ2VcbiAgICBwdWJsaWMgZ2V0UmFuZG9tUGxheWVyKCl7XG4gICAgICAgIHZhciBlbGxpZ2libGVQbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICBcbiAgICAgICAgLy9wb3B1bGF0ZSBlbGxpZ2libGUgcGxheWVycyBhcnJheVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLnBsYXllcnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNbaV0uYW5zd2VyQ291bnQ8dGhpcy5hbnN3ZXJDb3VudCl7XG4gICAgICAgICAgICAgICAgZWxsaWdpYmxlUGxheWVyc1tqXT10aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihqID09IDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGopOyAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGxpZ2libGVQbGF5ZXJzW3JhbmRvbV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGNhbGN1bGF0ZVRlYW1Db3VudCgpe1xuICAgICAgICBsZXQgdGVhbUNvdW50ID0gMDtcbiAgICAgICAgaWYoICh0aGlzLnBsYXllcnMubGVuZ3RoJTIgPT0gMCB8fCB0aGlzLnBsYXllcnMubGVuZ3RoJTMgPT0gMCApICYmIHRoaXMucGxheWVycy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAvL3RlYW0gY3JlYXRpb24gb2YgMiBvciAzIHBsYXllciBpcyBwb3NzaWJsZVxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzLmxlbmd0aCUzID09IDAgKXtcbiAgICAgICAgICAgICAgICAvL3RlYW1zIG9mIDMgd2lsbCBiZSBjcmVhdGVkXG4gICAgICAgICAgICAgICAgdGVhbUNvdW50ID0gdGhpcy5wbGF5ZXJzLmxlbmd0aC8zO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy90ZWFtcyBvZiAyIHdpbGwgYmUgY3JlYXRlZFxuICAgICAgICAgICAgICAgIHRlYW1Db3VudCA9IHRoaXMucGxheWVycy5sZW5ndGgvMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZWFtQ291bnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBubyB0ZWFtIGNyZWF0aW9uIGlzIHBvc3NpYmxlXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldEV4aXN0aW5nQW5kUmVtYWluaW5nUGxheWVycyh0ZWFtKTogUGxheWVyW117XG4gICAgICAgIHZhciBub1RlYW1QbGF5ZXJzIDogUGxheWVyW10gPSBbXTtcbiAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICBcbiAgICAgICAgLy9wb3B1bGF0ZSBlbGxpZ2libGUgcGxheWVycyBhcnJheVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLnBsYXllcnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNbaV0udGVhbSA9PSBudWxsIC8qfHwgdGhpcy5wbGF5ZXJzW2ldLnRlYW0gPT0gdGVhbSovICl7XG4gICAgICAgICAgICAgICAgbm9UZWFtUGxheWVyc1tqXT10aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIHJldHVybiBub1RlYW1QbGF5ZXJzO1xuICAgIH1cbn0iXX0=