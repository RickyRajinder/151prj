import Node from  '../graph/node.js'


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
                "<table border='1'><tr><td>Class Name: </td></tr><tr><td>Attributes: </td></tr><tr><td>Methods: </td></tr></table>" +
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
                "<table border='1'><tr><td>Interface Name: </td></tr><tr><td>Attributes: </td></tr><tr><td>Methods: </td></tr></table>" +
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
                "<table border='1'><tr><td>______</td></tr></table>" +
                "<table border='1'><tr><td>Package Name: </td></tr></table>" +
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
                "<table border='0' style='background-color:#eae364'><tr><td>Note: </td></tr></table>" +
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

export default Node