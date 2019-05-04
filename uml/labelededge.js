import Edge from "../graph/edge.js"

Edge.prototype.labelededge= function (startNode, endNode) {
    this.startNode = startNode
    this.endNode = endNode
    return {
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