'use strict'

/**
 * Base class represents edge between two nodes
 */
class Edge {

    /**
     * Constructor  
     */
    constructor() {
        // Body
        this.startNode = undefined;
        this.endNode = undefined;
        this.type = EdgeType.SOLID;
        this.arrowHeadEnd = Arrow.Invisible;
        this.arrowHeadStart = Arrow.Invisible;
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
     * Get properties of this edge
     * @return the dictionary of properties
     * { Key: [Value, Type, Opts] }
     */
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
     * Type of edge
     */
    EdgeType = {
        SOLID  : 0,
        DOTTED : 1,
        DASH   : 2
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
        bounds = this.getBounds()
        leftMost = bounds.x
        rightMost = bounds.x + bounds.width
        topMost = bounds.y
        bottomMost = bounds.y + bounds.height
        return (x > leftMost && x < rightMost) &&
                (y > topMost && y < bottomMost)
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
        startBound = this.startNode.getBounds()
        endBound = this.endNode.getBounds()
        startCenterX = (startBound.x + startBound.width) / 2
        startCenterY = (startBound.y + startBound.height) / 2
        endCenterX = (endBound.x + endBound.width) / 2
        endCenterY = (endBound.y + endBound.height) / 2
        return [startNode.getConnectionPoint(endCenterX, endCenterY),
                endNode.getConnectionPoint(startCenterX, startCenterY)] 
    }
}