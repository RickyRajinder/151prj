'use strict'

/**
 * Rectangular menu button
 */
export class MenuButton {    

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
        drawable, background = 'gray') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.drawable = drawable;
        this.background = background;
        this.action = undefined
        this.isSelected = false;
    }

    setAction(action) {
        this.action = action
    }

    /**
     * Check if this button contain given point
     * @param {number} x  
     * @param {number} y 
     */
    contains(x, y) {
        const leftBound = this.x
        const rightBoud = this.x + this.width
        const upperBound = this.y
        const lowerBound = this.y + this.height
        return (x > leftBound && x < rightBound) &&
               (y > upperBound && y < lowerBound)
    }

    /**
     * Determine if this button is selected
     */
    isSelected(){
        return this.isSelected;
    }

    /**
     * Select this button
     * @param {Boolean} bool true or false
     */
    setSelect(bool){
        this.isSelected = bool;
    }

    /**
     * To be extended
     */
    draw(g2) {
        // Draw button
        let savedStyle = g2.fillStyle
        g2.fillStyle = this.background
        g2.fillRect(this.x, this.y, this.width, this.height)
        g2.fillStyle = savedStyle

        // Draw button's icon
        let hPadding = this.width * 1 / 6;  // Hardcoded ratio. 
        let vPadding = this.height * 1 / 6; // Increase for smaller icon
        let iconX = this.x + hPadding;
        let iconY = this.y + vPadding;
        let iconW = this.width - hPadding;
        let iconH = this.height - vPadding;
        let bound = this.drawable.getBounds()
        let ratioX = iconW / bound.width
        let ratioY = iconH / bound.height
        g2.scale(ratioX, ratioY)
        let deltaX = bound.x - iconX
        let deltaY = bound.y - iconY
        g2.translate(deltaX, deltaY)
        this.drawable.draw(g2)

        //Restore
        g2.translate(-deltaX, deltaY)
        g2.scale(1/ratioX, 1/ratioY)
    }
}