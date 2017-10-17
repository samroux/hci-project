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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmREYXRhLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91bmREYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBWUk7UUFQTyxZQUFPLEdBQWMsRUFBRSxDQUFDO1FBS3RCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO0lBRVYsQ0FBQztJQUV2QixpRUFBaUU7SUFDakUsd0VBQXdFO0lBQ2pFLDJDQUFlLEdBQXRCO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsa0NBQWtDO1FBQ2xDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUUzQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFuQ1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBb0M3QjtJQUFELHdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1RyaXZpYVF1ZXN0aW9ufSBmcm9tIFwiLi4vdHJpdmlhUXVlc3Rpb25cIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vZ3JvdXBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdW5kRGF0YVByb3ZpZGVyIHtcbiAgICBcbiAgICBwdWJsaWMgdHJpdmlhUXVlc3Rpb246IFRyaXZpYVF1ZXN0aW9uOyBcbiAgICBwdWJsaWMgY3VycmVudFBsYXllcjogUGxheWVyO1xuICAgIHB1YmxpYyBncm91cDogR3JvdXA7XG4gICAgcHVibGljIHBsYXllcnMgOiBQbGF5ZXJbXSA9IFtdO1xuICAgIC8vIHByaXZhdGUgZWxsaWdpYmxlUGxheWVycyA6IFBsYXllcltdID0gW107XG4gICAgXG4gICAgcHVibGljIGdhbWVNb2RlOiBzdHJpbmc7XG4gICAgXG4gICAgcmVhZG9ubHkgYW5zd2VyQ291bnQ6bnVtYmVyID0gMjtcbiAgICBcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7fVxuICAgIFxuICAgIC8vIFJldHVybiBhIHBsYXllciB0aGF0IGhhdmVuJ3QgcGxheWVkIG1vcmUgdGhhbiBhdXRob3JpemVzIHRpbWVzXG4gICAgLy8gUmV0dXJucyBudWxsIGlmIG5vIGVsbGlnaWJsZSBwbGF5ZXIuIEhlbmNlIG5lZWQgdG8gZ28gdG8gc3VtbWFyeSBwYWdlXG4gICAgcHVibGljIGdldFJhbmRvbVBsYXllcigpe1xuICAgICAgICB2YXIgZWxsaWdpYmxlUGxheWVycyA6IFBsYXllcltdID0gW107XG4gICAgICAgIGxldCBqID0gMDtcblxuICAgICAgICAvL3BvcHVsYXRlIGVsbGlnaWJsZSBwbGF5ZXJzIGFycmF5XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPHRoaXMucGxheWVycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc1tpXS5hbnN3ZXJDb3VudDx0aGlzLmFuc3dlckNvdW50KXtcbiAgICAgICAgICAgICAgICBlbGxpZ2libGVQbGF5ZXJzW2pdPXRoaXMucGxheWVyc1tpXTtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihqID09IDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGopOyAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBlbGxpZ2libGVQbGF5ZXJzW3JhbmRvbV07XG4gICAgICAgIH1cbiAgICB9XG59Il19