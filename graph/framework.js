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
