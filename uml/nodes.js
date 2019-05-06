import Node from  '../graph/node.js'


/**
 * Creates a class node obj with default values
 * @param x coordinate
 * @param y coordinate
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' width='100' height='100' style='background-color: white'><tr><td>Class Name: </td></tr><tr><td>Attributes: </td></tr><tr><td>Methods: </td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates a class node obj with supplied class name, attributes, methods
 * @param x coordinate
 * @param y coordinate
 * @param strarr string array
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.classNodeUpdated = function (x,y, strarr) {
    this.x = x
    this.y = y
    this.strarr = strarr
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' width='100' height='100' style='background-color: white'><tr><td>" + this.strarr[0] + "</td></tr><tr><td>" + this.strarr[1] + "</td></tr><tr><td>" + this.strarr[2] + "</td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates an interface node obj with default values
 * @param x coordinate
 * @param y coordinate
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.interfaceNode = function (x,y) {
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' width='100' height='100' style='background-color: white'><tr><td>Interface Name: </td></tr><tr><td>Attributes: </td></tr><tr><td>Methods: </td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates an interface node obj with supplied class name, attributes, methods
 * @param x coordinate
 * @param y coordinate
 * @param strarr string array
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.interfaceNodeUpdated = function (x,y, strarr) {
    this.x = x
    this.y = y
    this.strarr = strarr
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' width='100' height='100' style='background-color: white'><tr><td>" + this.strarr[0] + "</td></tr><tr><td>" + this.strarr[1] + "</td></tr><tr><td>" + this.strarr[2] + "</td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates a package node with default value
 * @param x coordinate
 * @param y coordinate
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.packageNode = function (x,y) {
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' style='background-color: white'><tr><td>______</td></tr></table>" +
                "<table border='1' width='100' height='75' style='background-color: white'><tr><td align='center'>Package Name: </td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates a package node obj with supplied package name
 * @param x coordinate
 * @param y coordinate
 * @param strarr string array
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.packageNodeUpdated = function (x,y, strarr) {
    this.x = x
    this.y = y
    this.strarr = strarr
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='1' style='background-color: white'><tr><td>______</td></tr></table>" +
                "<table border='1' width='100' height='75' style='background-color: white'><tr><td align='center'>" + this.strarr[0] +"</td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>";

            const DOMURL = self.URL || self.webkitURL || self;
            const img = new Image();
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
            const url = DOMURL.createObjectURL(svg);
            img.onload = function () {
                ctx.drawImage(img, x, y);
                DOMURL.revokeObjectURL(url);
            };
            img.src = url;
        }
    }
}

/**
 * Creates an note node obj with default value
 * @param x coordinate
 * @param y coordinate
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.noteNode = function (x,y) {
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:15px'>" +
                "<table border='0' width='100' height='100' style='background-color:#eae364'><tr><td align='center'>Note: </td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>"

            const DOMURL = self.URL || self.webkitURL || self
            const img = new Image()
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"})
            const url = DOMURL.createObjectURL(svg)
            img.onload = function () {
                ctx.drawImage(img, x, y)
                DOMURL.revokeObjectURL(url)
            }
            img.src = url
        }
    }
}

/**
 * Creates an note node obj with supplied note value
 * @param x coordinate
 * @param y coordinate
 * @param strarr string array
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: number, y: *, height: number}), translate: translate}}
 */
Node.prototype.noteNodeUpdated = function (x,y, strarr) {
    this.x = x
    this.y = y
    this.strarr = strarr
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            const data = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>" +
                "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:10px'>" +
                "<table border='0' width='100' height='100' style='background-color:#eae364'><tr><td align='center'>" + this.strarr[0] +  "</td></tr></table>" +
                "</div>" +
                "</foreignObject>" +
                "</svg>"

            const DOMURL = self.URL || self.webkitURL || self
            const img = new Image()
            const svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"})
            const url = DOMURL.createObjectURL(svg)
            img.onload = function () {
                ctx.drawImage(img, x, y)
                DOMURL.revokeObjectURL(url)
            }
            img.src = url
        }
    }
}

/**
 * Creates a circle node
 * @param x
 * @param y
 * @param size
 * @param color
 * @returns {{contains: (function(*): boolean), draw: draw, getBounds: (function(): {x: *, width: *, y: *, height: *}), translate: translate}}
 */
Node.prototype.circleNode = function(x, y, size, color) {
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
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')
            ctx.beginPath()
            ctx.arc(x + size /2, y + size/2, size / 2, 0, Math.PI * 2, true)
            ctx.fillStyle = color
            ctx.fill()
        }
    }
}

export default Node