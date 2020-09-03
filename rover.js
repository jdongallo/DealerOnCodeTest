"use strict";
exports.__esModule = true;
var console_1 = require("console");
function changeDirection(dir, turn) {
    if (turn != "L" && turn != "R") {
        return;
    }
    if (dir.x == 0) {
        // Direction is N
        if (dir.y == 1) {
            dir.x = (turn == "L") ? -1 : 1;
        }
        // Direction is S
        else {
            dir.x = (turn == "L") ? 1 : -1;
        }
        dir.y = 0;
    }
    else {
        // Direction is E
        if (dir.x == 1) {
            dir.y = (turn == "L") ? 1 : -1;
        }
        // Direction is W
        else {
            dir.y = (turn == "L") ? -1 : 1;
        }
        dir.x = 0;
    }
}
var dir = {
    x: 0,
    y: 1
};
// N to W
changeDirection(dir, "L");
console_1.assert(dir.x == -1, "Line 43");
console_1.assert(dir.y == 0, "Line 44");
// W to S
changeDirection(dir, "L");
console_1.assert(dir.x == 0, "Line 48");
console_1.assert(dir.y == -1, "Line 49");
// S to E
changeDirection(dir, "L");
console_1.assert(dir.x == 1, "Line 53");
console_1.assert(dir.y == 0, "Line 54");
// E to N
changeDirection(dir, "L");
console_1.assert(dir.x == 0, "Line 58");
console_1.assert(dir.y == 1, "Line 59");
// N to E
changeDirection(dir, "R");
console_1.assert(dir.x == 1, "Line 58");
console_1.assert(dir.y == 0, "Line 59");
// E to S
changeDirection(dir, "R");
console_1.assert(dir.x == 0, "Line 58");
console_1.assert(dir.y == -1, "Line 59");
// S to W
changeDirection(dir, "R");
console_1.assert(dir.x == -1, "Line 58");
console_1.assert(dir.y == 0, "Line 59");
// W to N
changeDirection(dir, "R");
console_1.assert(dir.x == 0, "Line 58");
console_1.assert(dir.y == 1, "Line 59");
