import Edge from "../graph/edge.js"

Edge.prototype.straightedge= function (startNode, endNode) {
    this.startNode = startNode
    this.endNode = endNode
    return {
        contains: (x, y) => {
            let bounds = this.getBounds()
            let leftMost = bounds.x
            let rightMost = bounds.x + bounds.width
            let topMost = bounds.y
            let bottomMost = bounds.y + bounds.height
            return (x > leftMost && x < rightMost) &&
                (y > topMost && y < bottomMost)
        },
        draw: () => {
            console.log("Drawing LabeledEdge.")
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            ctx.moveTo(startNode.getBounds().x, startNode.getBounds().y)
            ctx.lineTo(endNode.getBounds().x, endNode.getBounds().y)
            ctx.stroke()
        }
    }
}

export default Edge