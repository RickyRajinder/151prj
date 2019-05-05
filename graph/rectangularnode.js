import { Node } from './node.js'

'use strict'

export class RectangularNode extends Node {
    /**
     * Construct new rectangular node
     * @param {*} width width
     * @param {*} height height
     */
    constructor(x, y, width, height) {
        super()
        this.translate(x, y)
        this.width = width
        this.height = height
    }

    translate(dx, dy) {
        this.x += dx
        this.y += dy
        super.translate(dx, dy);
    }

    /**
     * Draw rectangular node
     * @param {*} g2  
     */
    draw(g2) {
        g2.strokeRect(this.x, this.y, this.width, this.height)
        let saved = g2.fillStyle
        g2.fillStyle = "white"
        g2.fillRect(this.x, this.y, this.width, this.height)
        g2.fillStyle = saved
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

    /**
     * Get a connection point given
     * the location of other node
     * @param {*} otherX 
     * @param {*} otherY 
     */
    getConnectionPoint(otherX, otherY) {
        const bounds = getBounds()
        const slope = bounds.height / bounds.width
        const ex = otherX - this.x
        const ey = otherY - this.y
        const x = (bounds.x + bounds.width) / 2
        const y = (bounds.y + bounds.height) / 2
        if (ex != 0 && -slope <= ey / ex && ey / ex <= slope){
            if (ex > 0) {
                x = bounds.x + bounds.width
                y += (bounds.width / 2) * ey / ex
            }
            else {
                x = bounds.x
                y -= (bounds.width / 2) * ey / ex
            }
        }
        else if (ey != 0) {
            if (ey > 0) {
                x += (bounds.height / 2) * ex / ey
                y = bounds.y + bounds.height
            }
            else {
                x -= (bounds.height / 2) * ex / ey
                y = bounds.y
            }
        }
    }

    getProperties(){
        throw "Abstract method"
    }
}