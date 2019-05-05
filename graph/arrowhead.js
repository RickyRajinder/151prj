'use strict'

export class ArrowHead {

    /**
     * Construct an arrow head
     * @param {Shape} shape 
     * @param {Boolean} filled 
     */
    constructor(shape, color = 'white') {
        this.shape = shape; 
        this.color = color;
    }

    /**
     * Draw arrow head from (x1, y1) to (x2, y2)
     * @param {Graphics2D} g2 
     * @param {number} xp start x 
     * @param {number} yp start y
     * @param {number} xq end x
     * @param {number} yq end y
     */
    draw(g2, xp, yp, xq, yq) {
        const savedFillStyle = g2.fillStyle
        g2.fillStyle = this.color
        const ARROW_ANGLE = Math.PI / 6;
        const ARROW_LENGTH = 10;
        const dx = xq - xp;
        const dy = yq - yp;
        const angle = Math.atan2(dy, dx)
        const x1 = xq - ARROW_LENGTH * Math.cos(angle + ARROW_ANGLE)
        const y1 = yq - ARROW_LENGTH * Math.sin(angle + ARROW_ANGLE)
        const x2 = xq - ARROW_LENGTH * Math.cos(angle - ARROW_ANGLE)
        const y2 = yq - ARROW_LENGTH * Math.sin(angle - ARROW_ANGLE)
        g2.beginPath()
        g2.moveTo(xq, yq)
        g2.lineTo(x1, y1)
        switch (this.shape) {
            case Shape.VSHAPE:
                g2.moveTo(x2, y2)
                g2.lineTo(xq, yq)
                g2.stroke()
                break;
            case Shape.TRIANGLE:
                g2.lineTo(x2, y2)
                g2.closePath()
                g2.stroke()
                g2.fill()
                break;
            case Shape.DIAMOND:
                const x3 = x2 - ARROW_LENGTH * Math.cos(angle + ARROW_ANGLE)
                const y3 = y2 - ARROW_LENGTH * Math.sin(angle + ARROW_ANGLE)
                g2.lineTo(x3, y3)
                g2.lineTo(x2, y2)
                g2.closePath()
                g2.stroke()
                g2.fill()
                break;
            case Shape.NONE:
            default:
        }
    }

    getText() {
        if (this.shape === Shape.NONE)
            return "NONE"
        if (this.shape === Shape.VSHAPE)
            return "V"
        if (this.shape === Shape.TRIANGLE)
            return this.color == "black" ? "BLACK_TRIANGLE" : "TRIANGLE"
        if (this.shape === Shape.DIAMOND)
            return this.color == "black" ? "BLACK_DIAMOND" : "DIAMOND"
        return "UNKNOWN"
    }
}

/**
 * All available shapes
 */
const Shape = {
    NONE     : 0,
    VSHAPE   : 1,
    TRIANGLE : 2,
    DIAMOND  : 3,
};

/**
 * List of prototypes for ArrowHead
 */
ArrowHead.Prototypes = [
    new ArrowHead(Shape.NONE),
    new ArrowHead(Shape.VSHAPE, 'black'),
    new ArrowHead(Shape.TRIANGLE, 'black'),
    new ArrowHead(Shape.TRIANGLE, 'white'),
    new ArrowHead(Shape.DIAMOND, 'white'),
    new ArrowHead(Shape.DIAMOND, 'black'),
]

ArrowHead.None = ArrowHead.Prototypes[0]
ArrowHead.VShape = ArrowHead.Prototypes[1]
ArrowHead.WTriangle = ArrowHead.Prototypes[2]
ArrowHead.BTriangle = ArrowHead.Prototypes[3]
ArrowHead.WDiamond = ArrowHead.Prototypes[4]
ArrowHead.BDiamond = ArrowHead.Prototypes[5]
