'use strict'

function drawGrabber(x, y) {
    const size = 5;
    const panel = document.getElementById('graphpanel')
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black'
    ctx.fill(x - size /2, y - size / 2, size, size)
}

function createCircleNode (x, y, size, color) {
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
        const canvas = document.getElementById('graphanel');
        const ctx = canvas.getContext('2d');
        ctx.beginPath()
        ctx.arc(x + size /2, y + size / 2, size, 0, Math.PI * 2, true)
        ctx.fillStyle = color
        ctx.fill()
    }
    }
}
function center(rect){
    return { x:rect.x + rect.width /2, y: rect.y + rect. height /2)}
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
        const canvas = document.getElementById('graphpanel')
        const ctx = canvas.getContext('2d')
        ctx.beginPath()
        const p = center(start.getBounds()) // Just pick the center of the bounds for now
        const q = center(end.getBounds()) // Not the "connection points" that graphed2 uses
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()
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
        for (const e of this.edges) {
            e.draw()
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
    const e = createLineEdge()
    graph.connect(e, { x: 20, y: 20 }, { x: 40, y: 40 })
}

document.addEventListener('DOMContentLoaded', function () {
                          const graph = new Graph()
                          const n1 = createCircleNode(10, 10, 20, 'goldenrod')
                          const n2 = createCircleNode(30, 30, 20, 'blue')
                          graph.add(n1)
                          graph.add(n2)
                          graph.draw()
                          
                          const panel = document.getElementById('graphpanel')
                          let selected = undefined
                          let dragStartPoint = undefined
                          let dragStartBounds = undefined
                          
                          function repaint() {
                          const nodeContainer = document.getElementById('nodeContainer')
                          nodeContainer.innerHTML = ''
                          const canvas = document.getElementById('graphpanel')
                          const ctx = canvas.getContext('2d')
                          ctx.clearRect(0, 0, canvas.width, canvas.height)
                          graph.draw()  //
                          if (selected !== undefined) {
                          const bounds = selected.getBounds()
                          drawGrabber(bounds.x, bounds.y)
                          drawGrabber(bounds.x + bounds.width, bounds.y)
                          drawGrabber(bounds.x, bounds.y + bounds.height)
                          drawGrabber(bounds.x + bounds.width, bounds.y + bounds.height)
                          }
                          }
                          
                          function mouseLocation(event) {
                          var rect = panel.getBoundingClientRect();
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

