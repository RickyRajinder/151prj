'use strict'

/**
 * Base class represents edge between two nodes
 */
class Edge {

    /**
     * Constructor
     * @param {Node} startNode starting node
     * @param {Node} endNode ending node
     * @param {EdgeType} type type of edge
     * @param {ArrowHead} arrowHead type of arrow
     * @param {Boolean} reverse point from end to start if true  
     */
    constructor(startNode, endNode) {
        // Body
        this.startNode = startNode;
        this.endNode = endNode;
        this.type = EdgeType.SOLID;
        this.arrowHead = Arrow.Invisible;
        this.reverse = false;
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
     * Set arrow head type
     * @param {ArrowHead} arrow 
     */
    setArrowHead(arrow) {
        this.arrowHead = arrow;
    }

    /**
     * Set revert start and end points
     * @param {Boolean} reverse 
     */
    setReverse(reverse) {
        this.reverse = reverse;
    }

    /**
     * Check if a point is contained by this edge boundaries
     * @param {Point2D} point 
     */
    contains(point) {
        //TODO: Get bounds
        //TODO: Check point is within bounds
    }

    /**
     * Get bounds of this edge
     */
    getBounds() {
        //TODO: To be implemented 
    }


    /**
     * Get two endpoints of this 
     * edge on the connected nodes
     */
    getConnectionPoints() {
        //TODO: To be implemented
    }
}