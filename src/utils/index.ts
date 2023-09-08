export const mouse = {
    x: 150,
    y: 200
}

export let hue = {
    val: 0
};

export class Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    canvasEl: HTMLCanvasElement
    colorVar: string

    constructor(canvasEl: HTMLCanvasElement) {
        this.x = mouse.x;
        this.y = mouse.y;

        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

        this.canvasEl = canvasEl
        this.colorVar = `hsl(${hue.val}, 100%, 50%)`
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        // this will diminish size in time
        if (this.size > 0.2) this.size -= 0.1
    }

    draw() {
        const cCtx = this.canvasEl.getContext("2d") as CanvasRenderingContext2D
        // cCtx.fillStyle = "blue";
        cCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        cCtx.fillStyle = this.colorVar;
        cCtx.beginPath();
        cCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // cCtx.fill();
    }
}