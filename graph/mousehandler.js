import Node from './node.js'
import { Graph, drawGrabber } from './graph.js'
import Edge from './edge.js'
import ToolBar from './toolbar.js'
import PropertySheet from './propertysheet.js'
'use strict'

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


