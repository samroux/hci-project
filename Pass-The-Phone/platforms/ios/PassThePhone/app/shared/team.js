"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(name, players) {
        this.name = name;
        this.players = players;
        this.playersName = "";
        for (var i = 0; i < this.players.length; i++) {
            this.playersName += this.players[i].name;
            if (i < this.players.length - 1) {
                this.playersName += ", ";
            }
        }
    }
    Team.prototype.playersToString = function () {
        var playersName = "";
        for (var i = 0; i < this.players.length; i++) {
            playersName += this.players[i].name;
            if (i < this.players.length - 1) {
                playersName += ", ";
            }
        }
        return playersName;
    };
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLGNBQW9CLElBQVksRUFBUyxPQUFzQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUZ4RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUk5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sOEJBQWUsR0FBdEI7UUFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsV0FBVyxJQUFJLElBQUksQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllclwiXG5cbmV4cG9ydCBjbGFzcyBUZWFtIHtcbiAgXG4gIHB1YmxpYyBwbGF5ZXJzTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgcGxheWVyczogQXJyYXk8UGxheWVyPil7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbGF5ZXJzTmFtZSArPSB0aGlzLnBsYXllcnNbaV0ubmFtZTtcbiAgICAgIFxuICAgICAgaWYgKGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnBsYXllcnNOYW1lICs9IFwiLCBcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcGxheWVyc1RvU3RyaW5nKCl7XG4gICAgbGV0IHBsYXllcnNOYW1lID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyc05hbWUgKz0gdGhpcy5wbGF5ZXJzW2ldLm5hbWU7XG4gICAgICBcbiAgICAgIGlmIChpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcGxheWVyc05hbWUgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyc05hbWU7XG4gIH1cbn0iXX0=