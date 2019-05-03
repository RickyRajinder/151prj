'use strict'

class SimpleEdge extends Edge {
    /**
     * Constructor
     * @param {Node} startNode 
     * @param {Node} endNode 
     */
    constructor(startNode,endNode){
        super(startNode, endNode);
    }

    /**
     * Draws a straight edge connecting two nodes
     */
    draw(){
        panel2.beginPath();
        panel2.strokeStyle = 'black';
        panel2.moveTo(startNode.x, startNode.y);
        panel2.lineTo(endNode.x, endNode.y);
        panel2.stroke();

    }

}