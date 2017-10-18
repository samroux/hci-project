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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUUsZUFBbUIsSUFBWSxFQUFTLE9BQWlCO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBRmxELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRXpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXJcIlxuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBcbiAgcHVibGljIHBsYXllcnNOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHBsYXllcnM6IFBsYXllcltdKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbGF5ZXJzTmFtZSArPSB0aGlzLnBsYXllcnNbaV0ubmFtZTtcbiAgICAgIFxuICAgICAgaWYgKGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnBsYXllcnNOYW1lICs9IFwiLCBcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=