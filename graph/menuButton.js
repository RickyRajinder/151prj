'use strict'

/**
 * Rectangular menu button
 */
class MenuButton {    

    /**
     * Construct rectangular menu button
     * @param {Function} action a function passed in by user for the listener to execute
     * @param {Integer} x horizontal position of button
     * @param {Integer} y vertical position of button
     * @param {Integer} width width of button
     * @param {Integer} height height of button
     * @param {Drawable} drawable drawable object
     */
    constructor(x, y, width, height, 
        drawable = null, background = 'gray') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.drawable = drawable;
        this.background = background;
        this.isSelected = false;
    }

    /**
     * Check if this button contain given point
     * @param {number} x  
     * @param {number} y 
     */
    contains(x, y) {
        leftBound = this.x
        rightBoud = this.x + this.width
        upperBound = this.y
        lowerBound = this.y + this.height
        return (x > leftBound && x < rightBound) &&
               (y > upperBound && y < lowerBound)
    }

    /**
     * Determine if this button is selected
     */
    isSelected(){
        return isSelected;
    }

    /**
     * Select this button
     * @param {Boolean} bool true or false
     */
    setSelect(bool){
        isSelected = bool;
    }

    /**
     * To be extended
     */
    draw(g2) {
        // Draw button
        savedStyle = g2.fillStyle
        g2.fillStyle = this.background
        g2.fillRect(this.x, this.y, this.width, this.height)
        g2.fillStyle = savedStyle
        this.drawable.draw()

        // Draw button's icon
        hPadding = this.width * 1 / 6;  // Hardcoded ratio. 
        vPadding = this.height * 1 / 6; // Increase for smaller icon
        iconX = this.x + padding;
        iconY = this.y + padding;
        iconW = this.width - padding;
        iconH = this.height - padding;
        bound = this.drawable.getBounds()
        ratioX = iconW / bound.width
        ratioY = iconH / bound.height
        g2.scale(ratioX, ratioY)
        deltaX = bound.x - iconX
        deltaY = bound.y - iconY
        g2.translate(deltaX, deltaY)
        this.drawable.draw()

        //Restore
        g2.translate(-deltaX, deltaY)
        g2.scale(1/ratioX, 1/ratioY)
    }
}