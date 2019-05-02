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
        this.start = x
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
	addButton(width, height, action, drawable) {
        paddingX = 3 // pixels
        paddingY = 3 // pixels
        button = new MenuButton(start + paddingX, y + paddingY, 
                        width, height + paddingY)
        
	}

	draw(g2) {

		g2.fillRect(this.x, this.y, this.width, this.height)
	}

	drawButtons() {
		this.buttons.forEach(function() {
			
	    });
    }
    
}
	