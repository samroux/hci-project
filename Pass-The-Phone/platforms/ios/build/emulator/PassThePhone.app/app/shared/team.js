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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLGNBQW9CLElBQVksRUFBUyxPQUFzQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUZ4RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUk5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUV6QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU0sOEJBQWUsR0FBdEI7UUFDRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsV0FBVyxJQUFJLElBQUksQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVNLDZCQUFjLEdBQXJCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUUsTUFBTSxDQUFDLENBQUM7UUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCJcblxuZXhwb3J0IGNsYXNzIFRlYW0ge1xuICBcbiAgcHVibGljIHBsYXllcnNOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+KXtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBsYXllcnNOYW1lICs9IHRoaXMucGxheWVyc1tpXS5uYW1lO1xuICAgICAgXG4gICAgICBpZiAoaSA8IHRoaXMucGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMucGxheWVyc05hbWUgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwbGF5ZXJzVG9TdHJpbmcoKXtcbiAgICBsZXQgcGxheWVyc05hbWUgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXJzTmFtZSArPSB0aGlzLnBsYXllcnNbaV0ubmFtZTtcbiAgICAgIFxuICAgICAgaWYgKGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICBwbGF5ZXJzTmFtZSArPSBcIiwgXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJzTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb3RhbFBvaW50cygpe1xuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBUb3RhbCBwb2ludHNcIik7XG4gICAgbGV0IHBvaW50cyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50cyArPSB0aGlzLnBsYXllcnNbaV0ucnVubmluZ1BvaW50c1RvdGFsO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlBvaW50czogXCIrIHBvaW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxuICAgIFxufSJdfQ==