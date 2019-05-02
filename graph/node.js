'use strict'


class Node {

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
        // Empty dict since base Node
        return {}
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
    }

    /**
     * Set parent
     * @param {Node} node 
     */
    setParent(node) {
		this.parent = node
    }
    
    /**
     * TODO: Comment
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
     * TODO: Comment
     * @param {*} edge 
     * @param {*} point1 
     * @param {*} point2 
     */
    addEdge(edge, point1, point2) {
	    return edge.getEnd() != null //Implement in Edge
    }

    /**
     * TODO: Comment
     * @param {*} graph 
     * @param {*} edge 
     */
    removeEdge(graph, edge) {
    }

    /**
     * TODO: Comment
     * @param {*} graph 
     * @param {*} node 
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
     * TODO: Comment
     * @param {*} graph 
     * @param {*} g2 
     * @param {*} grid 
     */
    layout(graph, g2, grid) {
    }

    /**
     * TODO: Comment
     * @param {*} node 
     * @param {*} point 
     */
    addNode(node, point) {
	    return false
    }

    /**
     * TODO: Comment
     */
    getParent() {
	    return this.parent
    }

    /**
     * TODO: Comment
     */
    getChildren() {
	    return this.children
    }

    /**
     * TODO: Comment
     * @param {*} index 
     * @param {*} node 
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
     * TODO: Comment
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
     * TODO: Comment
     */
    removeChild (node) {
        if (node.getParent() !== this){
            return
        }
        this.children.splice(this.children.indexOf(node), 1)
        node.setParent(null)
    }

    /**
     * TODO: Comment
     */
    circleNode(x, y, size, color) {
        this.x = x
        this.y = y
        return {
            getBounds: () => {
                return {
                    x: x,
                    y: y,
                    width: size,
                    height: size
                }
            },
            contains: p => {
                return (x + size / 2 - p.x) ** 2 + (y + size / 2 - p.y) ** 2 <= size ** 2 / 4
            },
            translate: (dx, dy) => {
                x += dx
                y += dy
            },
            draw: () => {
                const canvas = document.getElementById('canvas')
                const ctx = canvas.getContext('2d')
                ctx.beginPath()
                ctx.arc(x + size /2, y + size/2, size / 2, 0, Math.PI * 2, true)
                ctx.fillStyle = color
                ctx.fill()
            }
        }
    }

    center(rect){
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2}
    }

}


export default Node