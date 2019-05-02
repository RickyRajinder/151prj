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
     * @param {ArrowHead} startArrowHead arrow head at start node
     * @param {ArrowHead} endArrowHead arrow head at end node  
     */
    constructor(startNode, endNode) {
        // Body
        this.startNode = startNode;
        this.endNode = endNode;
        this.type = EdgeType.SOLID;
        this.arrowHeadEnd = Arrow.Invisible;
        this.arrowHeadStart = Arrow.Invisible;
        this.propertySheet = new PropertySheet(this);
    }

    /**
     * Get properties of this edge
     * @return the dictionary of properties
     * { Key: [Value, Type, Opts] }
     */
    getProperties() {
        edgeTypes = ["SOLID", "DASH"];
        arrowHeadTypes = [];
        for (arrowType in ArrowHead.Types)
            arrowHeadTypes.push(arrowType.getText());
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

    createLineEdge() {
        let start = undefined
        let end = undefined
        return {
            connect: (s, e) => {
                start = s
                end = e
            },
            draw: () => {
                const canvas = document.getElementById('canvas')
                const ctx = canvas.getContext('2d')
                ctx.beginPath()
                const p = center(start.clientX)// Just pick the center of the bounds for now
                const q = center(end.clientX) // Not the "connection points" that graphed2 uses
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(q.x, q.y)
                ctx.stroke()
            }
        }
    }

}