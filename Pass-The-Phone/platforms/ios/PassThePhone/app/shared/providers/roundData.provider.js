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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmREYXRhLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91bmREYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBV0k7UUFOTyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUkzQixnQkFBVyxHQUFVLENBQUMsQ0FBQztJQUVWLENBQUM7SUFFdkIsaUVBQWlFO0lBQ2pFLHdFQUF3RTtJQUNqRSwyQ0FBZSxHQUF0QjtRQUNJLElBQUksZ0JBQWdCLEdBQWMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLGtDQUFrQztRQUNsQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7Z0JBQzdDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFM0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBbENRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQW1DN0I7SUFBRCx3QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUcml2aWFRdWVzdGlvbn0gZnJvbSBcIi4uL3RyaXZpYVF1ZXN0aW9uXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uL2dyb3VwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3VuZERhdGFQcm92aWRlciB7XG4gICAgXG4gICAgcHVibGljIHRyaXZpYVF1ZXN0aW9uOiBUcml2aWFRdWVzdGlvbjsgXG4gICAgcHVibGljIGN1cnJlbnRQbGF5ZXI6IFBsYXllcjtcbiAgICBwdWJsaWMgZ3JvdXA6IEdyb3VwO1xuICAgIHB1YmxpYyBwbGF5ZXJzIDogQXJyYXk8UGxheWVyPiA9IFtdO1xuICAgIFxuICAgIHB1YmxpYyBnYW1lTW9kZTogc3RyaW5nO1xuICAgIFxuICAgIHJlYWRvbmx5IGFuc3dlckNvdW50Om51bWJlciA9IDI7XG4gICAgXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge31cbiAgICBcbiAgICAvLyBSZXR1cm4gYSBwbGF5ZXIgdGhhdCBoYXZlbid0IHBsYXllZCBtb3JlIHRoYW4gYXV0aG9yaXplcyB0aW1lc1xuICAgIC8vIFJldHVybnMgbnVsbCBpZiBubyBlbGxpZ2libGUgcGxheWVyLiBIZW5jZSBuZWVkIHRvIGdvIHRvIHN1bW1hcnkgcGFnZVxuICAgIHB1YmxpYyBnZXRSYW5kb21QbGF5ZXIoKXtcbiAgICAgICAgdmFyIGVsbGlnaWJsZVBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgLy9wb3B1bGF0ZSBlbGxpZ2libGUgcGxheWVycyBhcnJheVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDx0aGlzLnBsYXllcnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNbaV0uYW5zd2VyQ291bnQ8dGhpcy5hbnN3ZXJDb3VudCl7XG4gICAgICAgICAgICAgICAgZWxsaWdpYmxlUGxheWVyc1tqXT10aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaiA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBqKTsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZWxsaWdpYmxlUGxheWVyc1tyYW5kb21dO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==