'use strict';

function drawGrabber(x, y) {
	const size = 5;
	const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    const panel = document.getElementById('graphpanel')
      rect.setAttribute('x', x - size / 2)
      rect.setAttribute('y', y - size / 2)
      rect.setAttribute('width', size)
      rect.setAttribute('height', size)
      rect.setAttribute('fill', 'black')
      panel.appendChild(rect)
}

function createRectangleNode (x, y, width, height) {
  return {
    getBounds: () => {
      return {
        x: x,
        y: y,
        width: width,
        height: height
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
      const panel = document.getElementById('graphpanel')
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('cx', x + size / 2)
      circle.setAttribute('cy', y + size / 2)
      circle.setAttribute('r', size / 2)
      circle.setAttribute('fill', color)
      panel.appendChild(circle)
    }
  }
}

class GraphFramework {

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



}
