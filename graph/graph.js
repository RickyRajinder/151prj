'use strict'


export class Graph {
    constructor() {
        this.nodes = []
        this.edges = []
        this.edgesToBeRemoved = []
        this.nodesToBeRemoved = []
        this.needsLayout = true
    }
    /**
     *  Adds a node to the graph so that the top left corner of
     * the bounding rectangle is at the given point.
     * @param n the node to add
     */
    addNode(n) {
        this.nodes.push(n)
    }

    /**
     * Adds an edge to the array
     * @param {*} e edge to add
     */
    addEdge(e) {
        this.edges.push(e)
    }

    /**
     * Adds a node without using context 2d
     * @param {*} node 
     */
    add(node) {
        this.nodes.push(node)
    }

    /**
     * Remove node from graph
     * @param {*} n
     */
    remove(n) {
        this.nodes.splice(this.nodes.indexOf(n), 1)
    }
    /**
     * Remove an edge from the graph
     * @param {*} edge to remove
     */
    removeEdge(e){
        this.edges.splice(this.edges.indexOf(e), 1)
    }
    /**
     * Find a node in this graph
     * @param {*} p point on canvas
     */
    findNode(p) {
        for (let i = this.nodes.length - 1; i >= 0; i--) {
            const n = this.nodes[i]
            if (n.contains(p)) return n
        }
        return undefined
    }
    /**
     * Find an edge in the graph
     * @param {*} p point on canvas
     */
    findEdge(p){
        for (let i = this.edges.length - 1; i >= 0; i--) {
            const edge = this.edges[i]
            if (edge.contains(p)) return edge
        }
        return undefined
    }

    /**
     * Draw all of the edges and nodes onto the canvas
     */
    draw() {
        for (const n of this.nodes) {
            n.draw();
        }
        for (const e of this.edges){
            e.draw();
        }

    }
    /**
     * Draw graph
     * @param {*} g2
     */
    draw(g2) {

      //  this.layout(g2);

        for (const n of this.nodes) {
            n.draw(g2)
        }

        for (const e of this.edges){
            e.draw(g2);
        }
    }
    /**
     * Adds an edge to the graph that joins the nodes containing
     * the given points. If the points aren't both inside nodes,
     * then no edge is added.
     * @param e the edge to add
     * @param p1 a point in the starting node
     * @param p2 a point in the ending node
     */
    connect(e, p1, p2) {
        //console.log("Connecting nodes..")
        //console.log(">Nodes: " + p1 + " " + p2)
        if (p1 !== undefined && p2 !== undefined) {
            //console.log("Found both nodes!")
            //e.connect(p1, p2)
            this.edges.push(e);
            return true;
        }
        return false;
    }

}

