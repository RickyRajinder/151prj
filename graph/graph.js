'use strict'

export class Graph {

    constructor() {
        this.nodes = []
        this.edges = []
        this.edgesToBeRemoved = []
        this.nodesToBeRemoved = []
        needsLayout = true
    }

    /**
      * Adds an edge to the graph that joins the nodes containing
      * the given points. If the points aren't both inside nodes,
      * then no edge is added.
      * @param e the edge to add
      * @param x1, y1 a point in the starting node
      * @param x2, y2 a point in the ending node
     */
    connect(edge, x1, y1, x2, y2) {
        let node1 = findNode(x1, y1)
        let node2 = findNode(x2, y2)
        if (node1 != null) {
            edge.connect(node1, node2)
            if (node1.addEdge(edge, x1, y1, x2, y2) && edge.getEnd() != null) {
                this.edges.push(edge)
                if (!this.nodes.contains(edge.getEnd()))
                    this.nodes.push(edge.getEnd())
                needsLayout = true
                return true
            }
        }
        return false
    }

    /**
     *  Adds a node to the graph so that the top left corner of
     * the bounding rectangle is at the given point.
     * @param n the node to add
     * @param x,y the desired location 
     */
    add(node, x, y) {
        let bounds = node.getBounds()
        node.translate(x - bounds.x, y - bounds.y)
        let accepted = false
        let insideANode = false
        for (let i = this.nodes.length - 1; i>= 0 && !accepted; i--) {
            let parent = this.nodes[i]
            if (parent.contains(x, y)) {
                insideANode =true
                if (parent.addNode(node, x, y)) accepted = true
            }
        }
        if (insideANode && !accepted)
            return false
        this.nodes.push(n)
        needLayout = true
        return true
    }

    /**
     * 
     * @param {*} n 
     */
    remove(n) {
        this.nodes.splice(this.nodes.indexOf(n), 1)
    }

    /**
     * Find a node in this graph
     * @param {*} x, y point on canvas
     */
    findNode(x, y) {
        for (let i = this.nodes.length - 1; i >= 0; i--) {
            const n = this.nodes[i]
            if (n.contains(p)) return n
        }
        return undefined
    }

    /**
     * Draw graph
     * @param {*} g2 
     */
    draw(g2) {

        layout(g2)

        for (const n of this.nodes) {
            n.draw()
        }

        for (const e of this.edges){
            e.draw();
        }
    }

    /**
     * Remove a node in this graph
     * @param {*} node 
     */
    removeNode(node) {
        if (nodesToBeRemoved.includes(node)) return
        nodesToBeRemoved.push(node)
        for (let i = 0; i < this.nodes.length; i++) {
            const node2 = this.nodes[i]
            node2.removeNode(this, node)
        }
        for (let i = 0; i < this.edges.length; i++) {
            const edge = this.edges[i]
            if (edge.getStart() == node || edge.getEnd() == node)
                removeEdge(edge)
        }
        needsLayout = true
    }

    /**
     * Remove an edge from the graph
     * @param {*} edge to remove
     */
    removeEdge(edge) {
        if (edgesToBeRemoved.includes(edge)) return
        edgesToBeRemoved.push(edge)
        for (let i = nodes.length - 1; i >= 0; i--) {
            const n = nodes[i]
            n.removeEdge(this, edge)
        }
        needsLayout = true
    }

    /**
     * Causes the layout of the graph to be recomputed.
     */
    layout() {
        needsLayout = true
    }


    layout(g2) {
        if (!needsLayout) return
        this.nodes.filter(function(n) { 
            return !nodesToBeRemoved.includes(n) 
        })
        this.edges.filter(function(e) {
            return !edgesToBeRemoved.includes(e)
        })
        for (let i = 0; i < this.nodes.length; i++) {
            const n = this.nodes[i]
            n.layout(this, g2)
        }
        needsLayout = false
    }
}