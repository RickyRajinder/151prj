import { Edge } from '../graph/edge.js' 

'use strict'

export class StraightEdge extends Edge {
    /**
     * Constructor
     * @param {Node} startNode 
     * @param {Node} endNode 
     */
    constructor(startNode, endNode){
        super();
        this.startNode = startNode;
        this.endNode = endNode;
    }

    /**
     * Draws a straight edge connecting two nodes
     */
    draw(g2){
        const x1 = this.startNode.x
        const y1 = this.startNode.y
        const x2 = this.endNode.x
        const y2 = this.endNode.y

        g2.beginPath();
        g2.moveTo(x1, y1);
        g2.lineTo(x2, y2);
        g2.stroke();
        this.arrowHeadEnd.draw(g2, x1, y1, x2, y2)
    }

    /**
     * 
     */
    getBounds() {
        const boundX = Math.min(this.startNode.x, this.endNode.x)
        const boundY = Math.min(this.startNode.y, this.endNode.y)
        const boundW = Math.abs(this.endNode.x - this.startNode.x)
        const boundH = Math.abs(this.endNode.y - this.startNode.y)
        
        return {
            x: boundX,
            y: boundY,
            width: boundW,
            height: boundH
        }
    }

}