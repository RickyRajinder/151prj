import Node from './node.js'
import Edge from './edge.js'
import ToolBar from './toolbar.js'
import PropertySheet from './propertysheet.js'
'use strict'

function drawGrabber(x, y) {
    const size = 5;
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.rect(x - size/ 2, y - size / 2, size, size)
    ctx.fillStyle = 'black'
    ctx.fill()
}

function center(rect){
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2}
}

function createLineEdge() {
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


function createCircleNode(x, y, width, height) {
    return {
        getBounds: () => {
            return {
                x: x,
                y: y,
                width: width,
                height: height
            }
        },
        draw: () => {
            const panel = document.getElementById('graphpanel')
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
            circle.setAttribute('x', x - size / 2)
            circle.setAttribute('y', y - size / 2)
            circle.setAttribute('width', width)
            circle.setAttribute('height', height)
            circle.setAttribute('fill', 'black')
            panel.appendChild(circle)
        }
    }
}

class Graph {
    constructor() {
        this.nodes = []
        this.edges = []
    }
    add(n) {
        this.nodes.push(n)
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
    }
    connect(e, p1, p2) {
        const n1 = this.findNode(p1)
        const n2 = this.findNode(p2)
        if (n1 !== undefined && n2 !== undefined) {
            e.connect(n1, n2)
            this.edges.push(e)
            return true
        }
        return false
    }
        
}


document.addEventListener('DOMContentLoaded', function () {
    const graph = new Graph()


    const panel = document.getElementById('canvas')

    panel.addEventListener('dblclick', event => {
        const n1 = Node.prototype.circleNode(event.clientX, event.clientY, 20, 'black')
        graph.add(n1)
        graph.draw()
    })




    let selected = undefined
    let dragStartPoint = undefined
    let dragStartBounds = undefined

    function repaint() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        graph.draw()
        if (selected !== undefined) {
            const bounds = selected.getBounds()
            drawGrabber(bounds.x, bounds.y)
            drawGrabber(bounds.x + bounds.width, bounds.y)
            drawGrabber(bounds.x, bounds.y + bounds.height)
            drawGrabber(bounds.x + bounds.width, bounds.y + bounds.height)
        }
    }

    function mouseLocation(event) {
        const rect = panel.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }

    panel.addEventListener('mousedown', event => {
        let mousePoint = mouseLocation(event)
        selected = graph.findNode(mousePoint)
        if (selected !== undefined) {
            dragStartPoint = mousePoint
            dragStartBounds = selected.getBounds()
        }
        repaint()
    })

    panel.addEventListener('mousemove', event => {
        if (dragStartPoint === undefined) return
        let mousePoint = mouseLocation(event)
        if (selected !== undefined) {
            const bounds = selected.getBounds();

            selected.translate(
                dragStartBounds.x - bounds.x
                + mousePoint.x - dragStartPoint.x,
                dragStartBounds.y - bounds.y
                + mousePoint.y - dragStartPoint.y);
            repaint()
        }
    })

    panel.addEventListener('mouseup', event => {
        dragStartPoint = undefined
        dragStartBounds = undefined
    })
})
