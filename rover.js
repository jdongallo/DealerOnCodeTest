function changeDirection(dir, turn) {
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
function getDirection(dir) {
    if (dir.x == 0) {
        return (dir.y == 1) ? "N" : "S";
    }
    return (dir.x == 1) ? "E" : "W";
}
function findPath(pos, commands, xBound, yBound) {
    for (let i = 0; i < commands.length; i++) {
        if (commands.charAt(i) == "L" || commands.charAt(i) == "R") {
            changeDirection(pos.z, commands.charAt(i));
        }
        else if (commands.charAt(i) == "M") {
            pos.x += pos.z.x;
            pos.y += pos.z.y;
            if (pos.x < 0 || pos.x > xBound || pos.y < 0 || pos.y > yBound) {
                throw new Error("rover out of bounds");
            }
        }
        else {
            throw new Error("invalid commands");
        }
    }
    console.log(`${pos.x} ${pos.y} ${getDirection(pos.z)}`);
}
let pos = {
    x: 1,
    y: 2,
    z: {
        x: 0,
        y: 1
    }
};
findPath(pos, "LMLMLMLMM", 5, 5);
pos = {
    x: 3,
    y: 3,
    z: {
        x: 1,
        y: 0
    }
};
findPath(pos, "MMRMMRMRRM", 5, 5);
