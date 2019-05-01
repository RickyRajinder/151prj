'use strict'
class ArrowHead{
    constructor(shape){
        this.shape = shape;//circle, rectangle, diamond, etc...
        this.color = 'black';
        this.fill = true;

    }
    /**
     * Set arrowhead color
     * @param {String} color 
     */
    setColor(color){
        this.color = color;
    }

    /**
     * Set fill
     * @param {Boolean} fill or not 
     */
    setFill(boolean){
        this.fill = boolean
    }

    //no draw method, arrow is originally invisible


}
