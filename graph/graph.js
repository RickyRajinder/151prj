'use strict'

export class Graph {
    constructor() {
        this.nodes = []
        this.edges = []
    }
    add(n) {
        this.nodes.push(n)
    }
    remove(n) {
        this.nodes.splice(this.nodes.indexOf(n), 1)
    }
    findNode(p) {
        for (let i = this.nodes.length - 1; i >= 0; i--) {
            const n = this.nodes[i]
            if (n.contains(p)) return n
        }
        return undefined
    }
    draw() {
        for (const n of this.nodes) {
            n.draw()
        }
        for (const e of this.edges){
            e.draw();
        }

    }
    connect(e, p1, p2) {
        console.log("Connecting nodes..")
        console.log(">Nodes: " + p1 + " " + p2)
        if (p1 !== undefined && p2 !== undefined) {
            console.log("Found both nodes!")
            //e.connect(p1, p2)
            this.edges.push(e)
            return true
        }
        return false
    }
}

export function drawGrabber(x, y) {
    const size = 5;
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.rect(x - size/ 2, y - size / 2, size, size)
    ctx.fillStyle = 'black'
    ctx.fill()
}

