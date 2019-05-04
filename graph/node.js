'use strict'

export class Node {

    constructor() {
        this.children = []
        this.parent = null
        this.x = null
        this.y = null
        this.propertySheet = new PropertySheet(this);
    }

    /**
     * Get properties. This method returns a key-value map in which key is a string
     * and value is a pair of current value and property type (string, text, numeric, 
     * boolean, option, etc.) 
     * Should be implemented in subclass 
     */
    getProperties() {
        throw "Abstract method"
    }

    /**
     * Draw node
     * @param {Graphics2D} g2
     */
    draw(g2) {
        throw "Abstract method"
    }

    /**
     * Get boundaries of node
     */
    getBounds() {
        throw "Abstract method"
    }

    /**
     * Get connection point given the location of
     * the other node 
     * @param {*} otherNode 
     */
    getConnectionPoint(x, y) {
        throw "Abstract method"
    }

    /**
     * Set properties. Set the current properties to the new properties 
     * taken from user's input.
     * Should be implemented in subclass
     * @param {*} properties new properties map 
     */
    setProperties(properties) {
        // Do nothing since we don't have any property
        // to set in base class
        throw "Abstract method"
    }

    /**
     * Check containment for given point
     * @param {*} x x-coordinate
     * @param {*} y y-coordinate
     */
    contains(x, y) {
        let bounds = getBounds()
        const left = bounds.x
        const right = bounds.x + bounds.width
        const top = bounds.y
        const bottom = bounds.y + bounds.height
        return x > left && x < right && 
                x > top && x < bottom
    }

    /**
     * Set parent
     * @param {Node} node 
     */
    setParent(node) {
		this.parent = node
    }
    
    /**
     * Return a clone of this node
     */
    clone() {
        console.log(this)
        let cloned = Object.assign({}, this)
        cloned.children = []
        for (let i = 0; i < this.children.length; i++) {
            let n = Node(this.children[i])
            cloned.children.push(Object.assign({}, n))
            n.setParent(cloned)
        }
        return cloned
    }

    /**
     * Translate this node
     * @param {Double} dx delta x 
     * @param {Double} dy delta y
     */
    translate(dx, dy) {
        for (let i = 0; i < this.children.length; i++) {
            const n = Node(this.children[i])
            n.x += dx
            n.y += dy
        }
    }

    /**
     * Implement in subclass
     * @param {Edge} edge 
     * @param {Point2D} point1 
     * @param {Point2D} point2 
     */
    addEdge(edge, x1, y1, x2, y2) {
	    return edge.getEnd() != null //Implement in Edge
    }

    /**
     * Implement in subclass
     * @param {Graph} graph 
     * @param {Edge} edge 
     */
    removeEdge(graph, edge) {
    }

    /**
     * Remove a node associates with this node
     * @param {Graph} graph graph contains this node 
     * @param {Node} node some node on the graph
     */
    removeNode(graph, node) {
        if (node === this.parent) {
            this.parent = null
        }
        if (node.getParent() === this) {
            this.children.splice(this.children.indexOf(node), 1)
	    }
    }

    /**
     * Layout node on grid.
     * Abstract method
     * @param {Graph} graph 
     * @param {Graphics} g2 
     * @param {Grid} grid 
     */
    layout(graph, g2, grid) {
        throw "Abtract method"
    }

    /**
     * Add sub node to this node
     * @param {Node} node 
     * @param {Point2D} point 
     */
    addNode(node, x, y) {
        return false
    }

    /**
     * Return parent of this node
     */
    getParent() {
	    return this.parent
    }

    /**
     * Return the list of children
     */
    getChildren() {
	    return this.children
    }

    /**
     * Add child node at index
     * @param {number} index 
     * @param {Node} node 
     */
    addChild(index, node) {
        let oldParent = node.getParent()
        if (oldParent != null){
            oldParent.removeChild(node)
        }
        this.children[index] = node
        node.setParent(this)
    }

    /**
     * Add child node
     */
    addChild (node) {
        let oldParent = node.getParent()
        if (oldParent != null){
            oldParent.removeChild(node)
        }
        this.children.push(node)
        node.setParent(this)
    };

    /**
     * Remove child node
     */
    removeChild (node) {
        if (node.getParent() !== this){
            return
        }
        this.children.splice(this.children.indexOf(node), 1)
        node.setParent(null)
    }

}

export default Node