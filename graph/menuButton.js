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
        const rightBound = this.x + this.width
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

        let b = this.drawable.getBounds()
        let deltaX = (this.x + this.width / 6) - b.x
        let deltaY = (this.y + this.height / 6) - b.y
        
        g2.translate(deltaX, deltaY)

        // Draw button's icon
        this.drawable.draw(g2)

        //Restore
        g2.translate(-(deltaX), -(deltaY))
    }
}