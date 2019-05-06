'use strict'

export class Grabbers {

    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
    }
    /**
     * Draw an individual grabber
     * @param {context} g2 
     * @param {*} x coordinate 
     * @param {*} y coordinate
     */
    draw(g2){//g2 = ctx 2d
        g2.beginPath()
        g2.rect(this.x - this.size/ 2, this.y - this.size / 2, this.size, this.size)
        g2.fillStyle = 'black'
        g2.fill()
    }
    /**
     * Get bounds 
     */
    getBounds() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height, 
        }
    }
}

export function drawGrabber(x, y) {
    const size = 5;
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.rect(x - size/ 2, y - size / 2, size, size)
    ctx.fillStyle = 'black'
    ctx.fill()
}