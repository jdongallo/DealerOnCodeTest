import { assert } from "console";

interface Direction {
    x: number;
    y: number;
}

function changeDirection(dir: Direction, turn: string) {
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

let dir : Direction = {
    x: 0,
    y: 1
};

// N to W
changeDirection(dir, "L");
assert(dir.x == -1, "Line 43");
assert(dir.y == 0, "Line 44");

// W to S
changeDirection(dir, "L");
assert(dir.x == 0, "Line 48");
assert(dir.y == -1, "Line 49");

// S to E
changeDirection(dir, "L");
assert(dir.x == 1, "Line 53");
assert(dir.y == 0, "Line 54");

// E to N
changeDirection(dir, "L");
assert(dir.x == 0, "Line 58");
assert(dir.y == 1, "Line 59");

// N to E
changeDirection(dir, "R");
assert(dir.x == 1, "Line 58");
assert(dir.y == 0, "Line 59");

// E to S
changeDirection(dir, "R");
assert(dir.x == 0, "Line 58");
assert(dir.y == -1, "Line 59");

// S to W
changeDirection(dir, "R");
assert(dir.x == -1, "Line 58");
assert(dir.y == 0, "Line 59");

// W to N
changeDirection(dir, "R");
assert(dir.x == 0, "Line 58");
assert(dir.y == 1, "Line 59");
