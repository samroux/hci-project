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
    Team.prototype.getTotalPoints = function () {
        console.log("Getting Total points");
        var points = 0;
        for (var i = 0; i < this.players.length; i++) {
            points += this.players[i].runningPointsTotal;
        }
        console.log("Points: " + points);
        return points;
    };
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLGNBQW9CLElBQVksRUFBUyxPQUFzQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUZ4RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUc5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sOEJBQWUsR0FBdEI7UUFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsV0FBVyxJQUFJLElBQUksQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVNLDZCQUFjLEdBQXJCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUUsTUFBTSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcblxuZXhwb3J0IGNsYXNzIFRlYW0ge1xuICBcbiAgcHVibGljIHBsYXllcnNOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+KXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbGF5ZXJzTmFtZSArPSB0aGlzLnBsYXllcnNbaV0ubmFtZTtcbiAgICAgIFxuICAgICAgaWYgKGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnBsYXllcnNOYW1lICs9IFwiLCBcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcGxheWVyc1RvU3RyaW5nKCl7XG4gICAgbGV0IHBsYXllcnNOYW1lID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyc05hbWUgKz0gdGhpcy5wbGF5ZXJzW2ldLm5hbWU7XG4gICAgICBcbiAgICAgIGlmIChpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcGxheWVyc05hbWUgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyc05hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0VG90YWxQb2ludHMoKXtcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgVG90YWwgcG9pbnRzXCIpO1xuICAgIGxldCBwb2ludHMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludHMgKz0gdGhpcy5wbGF5ZXJzW2ldLnJ1bm5pbmdQb2ludHNUb3RhbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJQb2ludHM6IFwiKyBwb2ludHMpO1xuICAgIFxuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgICBcbn0iXX0=