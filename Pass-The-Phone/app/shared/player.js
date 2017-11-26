"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.answerCount = 0;
        this.runningPointsTotal = 0;
        this.isSelected = false;
        //if in teams, has 1 chance to ask a friend
        this.canAsk = true;
    }
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFRSSxnQkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFOekIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBRS9CLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDbEMsMkNBQTJDO1FBQ3BDLFdBQU0sR0FBVyxJQUFJLENBQUM7SUFDSyxDQUFDO0lBQ3JDLGFBQUM7QUFBRCxDQUFDLEFBVEgsSUFTRztBQVRVLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZWFtfSBmcm9tIFwiLi90ZWFtXCJcblxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5zd2VyQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHJ1bm5pbmdQb2ludHNUb3RhbDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdGVhbTogVGVhbTtcbiAgICBwdWJsaWMgaXNTZWxlY3RlZDpib29sZWFuID0gZmFsc2U7XG4gICAgLy9pZiBpbiB0ZWFtcywgaGFzIDEgY2hhbmNlIHRvIGFzayBhIGZyaWVuZFxuICAgIHB1YmxpYyBjYW5Bc2s6Ym9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBuYW1lOiBzdHJpbmcpe31cbiAgfSJdfQ==