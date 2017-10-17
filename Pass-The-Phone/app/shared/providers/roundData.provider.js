"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoundDataProvider = /** @class */ (function () {
    function RoundDataProvider() {
        this.players = [];
        this.answerCount = 2;
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
    RoundDataProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RoundDataProvider);
    return RoundDataProvider;
}());
exports.RoundDataProvider = RoundDataProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmREYXRhLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91bmREYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBV0k7UUFOTyxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBSXRCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUV2QixpRUFBaUU7SUFDakUsd0VBQXdFO0lBQ2pFLDJDQUFlLEdBQXRCO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0NBQWtDO1FBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFsQ1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBbUM3QjtJQUFELHdCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vdHJpdmlhUXVlc3Rpb25cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vZ3JvdXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdW5kRGF0YVByb3ZpZGVyIHtcbiAgICBcbiAgICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uOyBcbiAgICBwdWJsaWMgY3VycmVudFBsYXllcjogUGxheWVyO1xuICAgIHB1YmxpYyBncm91cDogR3JvdXA7XG4gICAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgIFxuICAgIHB1YmxpYyBnYW1lTW9kZTogc3RyaW5nO1xuICAgIFxuICAgIHJlYWRvbmx5IGFuc3dlckNvdW50Om51bWJlciA9IDI7XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cbiAgICBcbiAgICAvLyBSZXR1cm4gYSBwbGF5ZXIgdGhhdCBoYXZlbid0IHBsYXllZCBtb3JlIHRoYW4gYXV0aG9yaXplcyB0aW1lc1xuICAgIC8vIFJldHVybnMgbnVsbCBpZiBubyBlbGxpZ2libGUgcGxheWVyLiBIZW5jZSBuZWVkIHRvIGdvIHRvIHN1bW1hcnkgcGFnZVxuICAgIHB1YmxpYyBnZXRSYW5kb21QbGF5ZXIoKXtcbiAgICAgICAgdmFyIGVsbGlnaWJsZVBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgLy9wb3B1bGF0ZSBlbGxpZ2libGUgcGxheWVycyBhcnJheVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLnBsYXllcnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNbaV0uYW5zd2VyQ291bnQ8dGhpcy5hbnN3ZXJDb3VudCl7XG4gICAgICAgICAgICAgICAgZWxsaWdpYmxlUGxheWVyc1tqXT10aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaiA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqKTsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZWxsaWdpYmxlUGxheWVyc1tyYW5kb21dO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==