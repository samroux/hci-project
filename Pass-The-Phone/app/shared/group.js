"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(name, players) {
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
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBS0UsZUFBbUIsSUFBWSxFQUFTLE9BQWlCO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRmxELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRXpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBcbiAgcHVibGljIGlkOiBudW1iZXI7XG4gIHB1YmxpYyBwbGF5ZXJzTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBwbGF5ZXJzOiBQbGF5ZXJbXSl7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGxheWVyc05hbWUgKz0gdGhpcy5wbGF5ZXJzW2ldLm5hbWU7XG4gICAgICBcbiAgICAgIGlmIChpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzTmFtZSArPSBcIiwgXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19