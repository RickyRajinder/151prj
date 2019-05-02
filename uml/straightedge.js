class StraightEdge extends LabeledEdge {
    constructor(start, end) {
        super(start, end);
    }

    // OVERRIDE
    draw() {
        //TODO: To be implemented
    }
    
    createLineEdge() {
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
}