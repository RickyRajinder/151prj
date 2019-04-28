'use strict'


function Node() {
	this.children = []
	this.parent = null
	this.x = null
	this.y = null
}

Node.prototype.setParent = function(node){
		this.parent = node
	}

Node.prototype.clone = function() {
	let cloned = Object.assign({}, this)
	cloned.children = []
	for (let i = 0; i < Node.prototype.children.length; i++) {
		let n = Node(Node.prototype.children[i])
		cloned.children.push(Object.assign({}, n))
		n.setParent(cloned)
	}
	return cloned
}


Node.prototype.translate = function(dx, dy) {
	for (let i = 0; i < this.children.length; i++) {
		const n = Node(this.children[i])
		n.x += dx
		n.y += dy
	}
}

Node.prototype.addEdge = function(edge, point1, point2) {
	return edge.getEnd() != null //Implement in Edge
}

Node.prototype.removeEdge = function(graph, edge) {
}

Node.prototype.removeNode = function(graph, node) {
	if (node === this.parent) {
		this.parent = null
	}
	if (node.getParent() === this) {
		this.children.splice(this.children.indexOf(node), 1)
	}
}

Node.prototype.layout = function (graph, g2, grid) {
}


Node.prototype.addNode = function (node, point) {
	return false
}

Node.prototype.getParent = function () {
	return this.parent
}

Node.prototype.getChildren = function () {
	return this.children
}

Node.prototype.addChild = function (index, node) {
	let oldParent = node.getParent()
	if (oldParent != null){
		oldParent.removeChild(node)
	}
	this.children[index] = node
	node.setParent(this)
}

Node.prototype.addChild = function (node) {
	let oldParent = node.getParent()
	if (oldParent != null){
		oldParent.removeChild(node)
	}
	this.children.push(node)
	node.setParent(this)
}

Node.prototype.removeChild = function (node) {
	if (node.getParent() !== this){
		return
	}
	this.children.splice(this.children.indexOf(node), 1)
	node.setParent(null)
}

	function createCircleNode(x, y, size, color) {
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


function drawGrabber(x, y) {
	const size = 5;
	const panel = document.getElementById('graphpanel')
	const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
	square.setAttribute('x', x - size / 2)
	square.setAttribute('y', y - size / 2)
	square.setAttribute('width', size)
	square.setAttribute('height', size)
	square.setAttribute('fill', 'black')
	panel.appendChild(square)
}



function createClassNode(x, y, width, height){
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
			const panel = document.getElementById('classnode')
			const circle = document.createElementNS('http://www.w3.org/2000/svg', '')
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
}

document.addEventListener('DOMContentLoaded', function() {
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
		panel.innerHTML = ''
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
