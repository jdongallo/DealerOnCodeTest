interface Direction {
    x: number;
    y: number;
}

interface Coords {
    x: number;
    y: number;
    z: Direction;
}

class Rover {
    private pos: Coords;

    constructor(x1: number, y1: number, zx: number, yx: number) {
        this.pos = {
            x: x1,
            y: y1,
            z: {
                x: zx,
                y: yx
            }
        };
    }

    private changeDirection(dir: Direction, turn: string): void {
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

    getDirection(dir: Direction): string {
        if (dir.x == 0) {
            return (dir.y == 1) ? "N" : "S";
        }
        return (dir.x == 1) ? "E" : "W";
    }

    findPath(commands: string, xBound: number, yBound: number): void {
        for (let i = 0; i < commands.length; i++) {
            if (commands.charAt(i) == "L" || commands.charAt(i) == "R") {
                this.changeDirection(this.pos.z, commands.charAt(i));
            }
            else if (commands.charAt(i) == "M") {
                this.pos.x += this.pos.z.x;
                this.pos.y += this.pos.z.y;
                if (this.pos.x < 0 || this.pos.x > xBound || this.pos.y < 0 || this.pos.y > yBound) {
                    throw new Error("rover out of bounds");
                }
            }
            else {
                throw new Error("invalid commands");
            }
        }
        console.log(`${this.pos.x} ${this.pos.y} ${this.getDirection(this.pos.z)}`);
    }
}

function xDirection(z: string): number {
    if (z == "N" || z == "S") {
        return 0;
    }
    else if (z == "E" || z == "W") {
        return (z == "E") ? 1 : -1;
    }
    throw new Error("invalid z");
}

function yDirection(z: string): number {
    if (z == "N" || z == "S") {
        return (z == "N") ? 1 : -1;
    }
    else if (z == "E" || z == "W") {
        return 0;
    }
    throw new Error("invalid z");
}


var readline = require("readline");

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on("line", function (cmd) {
    input.push(cmd);
});

rl.on("close", function (cmd) {
    const boundaries = input[0].split(" ");
    const xBound: number = parseInt(boundaries[0], 10);
    const yBound: number = parseInt(boundaries[1], 10);
    
    for (let i = 1; i < input.length; i += 2) {
        const roverVars = input[i].split(" ");
        let rover: Rover = new Rover(parseInt(roverVars[0], 10), parseInt(roverVars[1], 10), 
            xDirection(roverVars[2]), yDirection(roverVars[2]));
        rover.findPath(input[i+1], xBound, yBound);
    }
    process.exit(0);
});
