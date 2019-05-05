import { MenuButton } from './menuButton.js'

'use strict'

/**
 * Toolbar which contains multiple tools/buttons
 */
export class Toolbar {
    /**
     * Construct new toolbar
     * @param {Canvas} canvas html canvas element
     * @param {number} x top-left-x position 
     * @param {number} y top-left-y position
     * @param {number} width width of toolbar
     * @param {number} height height of toolbar
     */
	constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.leftMost = (x + width) / 2 // Center alignment
        this.buttons = []
        // canvas.addEventListener("click", this.handle, false)
    }
    

    /**
     * Add new button to this toolbar
     * @param {function} action action for button being added
     * @param {drawble} drawable a drawable object for drawing button icon 
     */
	addButton(drawable, action) {
        let width = this.width / 15 // 15 button max
        if (this.leftMost + width >= this.x + this.width)
            throw "Button overflow"
        let paddingX = 5 // pixels
        let paddingY = 5 // pixels
        let button = new MenuButton(this.leftMost + paddingX, this.y + paddingY, 
                        width, this.height - paddingY * 2, drawable)
        button.setAction(action)
        this.buttons.push(button)
        // Realign
        for (let b in this.buttons) {
            this.buttons[b].x -= width / 2
        }
        // Update left most
        this.leftMost = button.x + width;
        return button
	}

    /**
     * Draw toolbar + its buttons
     * @param {Graphics2D} g2 
     */
    draw(g2) { 
        // Draw toobar
        g2.strokeRect(this.x, this.y, this.width, this.height)
        // Draw buttons
        for (let b in this.buttons)
            this.buttons[b].draw(g2)
	}
}
	