'use strict'

/**
* Type of edge
*/
export var EdgeType = {
    SOLID  : 0,
    DOTTED : 1,
    DASH   : 2
};

/**
 * Base class represents edge between two nodes
 */
export class Edge {
    

    /**
     * Constructor  
     */
    constructor() {
        // Body
        this.startNode = undefined;
        this.endNode = undefined;
        this.type = EdgeType.SOLID;
        this.arrowHeadEnd = ArrowHead.None;
        this.arrowHeadStart = ArrowHead.None;
        this.propertySheet = new PropertySheet(this);
    }

    /**
     * Connect 2 nodes
     * @param {Node} startNode 
     * @param {Node} endNode 
     */
    connect(startNode, endNode) {
        this.startNode = startNode
        this.endNode = endNode
    }

    /**
     * Get end node
     */
    getEnd() {
        return this.endNode;
    }

    /**
     * Get start node
     */
    getStart() {
        return this.startNode;
    }

    /**
     * Get properties of this edge
     * @return the dictionary of properties
     * { Key: [Value, Type, Opts] }
     */
    getProperties() {
        const edgeTypes = ["SOLID", "DASH"];
        let arrowHeadTypes = [];
        for (let arrowHead in ArrowHead.prototype.Prototypes)
            arrowHeadTypes.push(arrowHead.getText());
        return {
            "type": [this.type, "Option", edgeTypes],
            "startArrowHead": [this.startArrowHead, "Option", arrowHeadTypes],
            "endArrowHead": [this.endArrowHead, "Option", arrowHeadTypes]
        }
    }

    /**
     * Set current properties of this edge to given properties
     */
    setProperties(properties) {
        for (const [key, value] of properties.entries()) {
            switch(key) {
                case "type": this.type = value;
                break;
                case "startArrowHead": this.startArrowHead = value;
                break;
                case "endArrowHead": this.endArrowHead = value;
            }
        }
    }
    
    /**
     * Set type of edge
     * @param {EdgeType} edgeType 
     */
    setType(edgeType) {
        this.type = edgeType;
    }

    /**
     * Set arrow head type at start node
     * @param {ArrowHead} arrow 
     */
    setStartArrowHead(arrow) {
        this.arrowHeadStart = arrow;
    }

    /**
     * Set arrow head type at end node
     * @param {ArrowHead} arrow
     */
    setEndArrowEnd(arrow) {
        this.arrowHeadEnd = arrow;
    }

    /**
     * Check if a point is contained by this edge boundaries
     * @param {number} x x-coordinate
     * @param {number} y y-coordinate
     */
    contains(x, y) {
        let bounds = this.getBounds()
        let leftMost = bounds.x
        let rightMost = bounds.x + bounds.width
        let topMost = bounds.y
        let bottomMost = bounds.y + bounds.height
        return (x > leftMost && x < rightMost) &&
                (y > topMost && y < bottomMost)
    }

    /**
     * Abstract method for drawing this edge
     * @param {Graphics2D} g2 
     */
    draw(g2) {
        throw "Abstract method"
    }

    /**
     * Abstract
     * Get bounds of this edge.
     */
    getBounds() {
        throw "Abstract method" 
    }


    /**
     * Get two endpoints of this 
     * edge on the connected nodes
     */
    getConnectionPoints() {
        let startBound = this.startNode.getBounds()
        let endBound = this.endNode.getBounds()
        let startCenterX = (startBound.x + startBound.width) / 2
        let startCenterY = (startBound.y + startBound.height) / 2
        let endCenterX = (endBound.x + endBound.width) / 2
        let endCenterY = (endBound.y + endBound.height) / 2
        return [startNode.getConnectionPoint(endCenterX, endCenterY),
                endNode.getConnectionPoint(startCenterX, startCenterY)] 
    }
}

export default Edge