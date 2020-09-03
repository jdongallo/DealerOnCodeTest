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

let r1: Rover = new Rover(1, 2, 0, 1);
r1.findPath("LMLMLMLMM", 5, 5);

let r2: Rover = new Rover(3, 3, 1, 0);
r2.findPath("MMRMMRMRRM", 5, 5);
