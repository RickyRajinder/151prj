import Edge from "../graph/edge.js"

Edge.prototype.straightedge= function (startNode, endNode) {
    this.startNode = startNode
    this.endNode = endNode
    let slope = undefined;
    let start = undefined;
    let end = undefined;
    return {
        draw: () => {
            //console.log("Drawing LabeledEdge.")
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            start = {x: startNode.getBounds().x, y: startNode.getBounds().y}
            end = {x: endNode.getBounds().x, y: endNode.getBounds().y}
            ctx.setLineDash([10, 10]);
            slope = (start.y - end.y)/(start.x - end.x)

            
            var headlen = 20;   // length of head in pixels
            var angle = Math.atan2(end.y-start.y,end.x-start.x);
            ctx.beginPath()
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke()

            ctx.beginPath()
            ctx.setLineDash([])
            ctx.moveTo(end.x, end.y);
            ctx.lineTo(end.x-headlen*Math.cos(angle-Math.PI/6),end.y-headlen*Math.sin(angle-Math.PI/6));
            ctx.lineTo(end.x, end.y);
            ctx.lineTo(end.x-headlen*Math.cos(angle+Math.PI/6),end.y-headlen*Math.sin(angle+Math.PI/6));
            ctx.stroke()
            

            //console.log(slope)
            /*
            ctx.moveTo(startNode.getBounds().x, startNode.getBounds().y)
            ctx.lineTo(endNode.getBounds().x, endNode.getBounds().y)
            ctx.stroke()
            */
            
        },
        contains: p => {
            //console.log("Checking for contains")
            //console.log("Mouse is at: " + p.x + " " + p.y)
            const leniency = 10;
            let multiplier = (p.x - start.x);
            let liney = start.y + (multiplier * slope);
            let linex = p.x;
            //console.log("Line is at: " + linex + " " + liney)
            return (p.x > linex - leniency && p.x < linex + leniency) &&
                (p.y > liney - leniency && p.y < liney + leniency)
        },
        getBounds: () => {
            return {
                start: start,
                end: end,
                slope: slope
            }
        }
    }
}

export default Edge