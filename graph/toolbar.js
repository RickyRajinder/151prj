'use strict'

/**
 * Toolbar which contains multiple tools/buttons
 */
class Toolbar {
    /**
     * Construct new toolbar
     * @param {*} canvas html canvas element
     * @param {*} x top-left-x position 
     * @param {*} y top-left-y position
     * @param {*} width width of toolbar
     * @param {*} height height of toolbar
     */
	constructor(canvas, x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.leftMost = (x + width) / 2 // Center alignment
        this.buttons = []
        canvas.addEventListener("click", handle, false)
    }
    
    /**
     * Event handler for this toolbar.
     * Invoke the action of the button being clicked
     * @param {Event} event 
     */
    handle(event) {
        for (button in this.buttons) {
            if (button.contains(event.clientX, event.clientY)) {
                button.action()
            }
        }
    }

    /**
     * Add new button to this toolbar
     * @param {function} action action for button being added
     * @param {drawble} drawable a drawable object for drawing button icon 
     */
	addButton(action, drawable) {
        width = this.width / 15 // 15 button max
        if (this.leftMost + width >= this.x + this.width)
            throw "Button overflow"
        paddingX = 3 // pixels
        paddingY = 3 // pixels
        button = new MenuButton(this.leftMost + paddingX, y + paddingY, 
                        width, height + paddingY)
        // Realign
        for (button in this.buttons) {
            button.x -= width / 2
        }
        // Update left most
        this.leftMost = button.x + width;
	}

    /**
     * Draw toolbar + its buttons
     * @param {Graphics2D} g2 
     */
    draw(g2) { 
        // Draw toobar
        g2.rect(this.x, this.y, this.width, this.height)
        // Draw buttons
        for (b in this.buttons)
            b.draw(g2)
	}
}
	