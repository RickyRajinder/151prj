import { RectangularNode } from '../graph/rectangularNode.js'
'use strict'

export class SimpleNode extends RectangularNode {

}

export class ColorNode extends SimpleNode {
    /**
     * Construct new rectangular node
     * @param {*} width width
     * @param {*} height height
     */
    constructor(x, y, width, height, color) {
        super(x,y,width,height)
        this.width = width
        this.height = height
        this.color = color
    }
    draw(g2){
        let saved = g2.fillStyle;
        let strokeSaved = g2.strokeStyle;
        g2.fillStyle = this.color;
        g2.fillRect(this.x, this.y, this.width, this.height);
        g2.strokeRect(this.x, this.y, this.width, this.height);
        g2.fillStyle = saved;
        g2.strokeStyle = strokeSaved;
    }


}