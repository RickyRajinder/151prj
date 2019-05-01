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

Node.prototype.circleNode = function (x, y, size, color) {
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
			const canvas = document.getElementById('canvas1')
			const ctx = canvas.getContext('2d')
			ctx.beginPath()
			ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2, true)
			ctx.fillStyle = color
			ctx.fill()
		}
	}
}

Node.prototype.classNode = function (x,y) {
	this.x = x
	this.y = y
	return {
		getBounds: () => {
			return {
				x: x,
				y: y,
				width: 100,
				height: 100
			}
		},
		contains: p => {
			return (x + 100 / 2 - p.x) ** 2 + (y + 100 / 2 - p.y) ** 2 <= 100 ** 2 / 4
		},
		translate: (dx, dy) => {
			x += dx
			y += dy
		},
		draw: () => {
			const canvas = document.getElementById('canvas1')
			const ctx = canvas.getContext('2d')
			const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
				"<foreignObject width='100%' height='100%'>" +
				"<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
				"<table border='1'><tr><td>Class Name</td></tr><tr><td>Attributes</td></tr><tr><td>Methods</td></tr></table>" +
				"</div>" +
				"</foreignObject>" +
				"</svg>";

			const DOMURL = self.URL || self.webkitURL || self;
			const img = new Image();
			const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
			const url = DOMURL.createObjectURL(svg);
			img.onload = function() {
				ctx.drawImage(img, x, y);
				DOMURL.revokeObjectURL(url);
			};
			img.src = url;
		}
	}
}


export default Node