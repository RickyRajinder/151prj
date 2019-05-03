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

    getProperties() {
        edgeTypes = ["SOLID", "DASH"];
        arrowHeadTypes = [];
        for (arrowHead in ArrowHead.prototype.Prototypes)
            arrowHeadTypes.push(arrowHead.getText());
        return {
            "type": [this.type, "Option", edgeTypes],
            "startArrowHead": [this.startArrowHead, "Option", arrowHeadTypes],
            "endArrowHead": [this.endArrowHead, "Option", arrowHeadTypes]
        }
    }
}