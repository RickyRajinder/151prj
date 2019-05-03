import Node from "./nodes.js"

const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
let dragStartPoint = undefined
let currentx = undefined
let currenty = undefined

function drawGrabber(x, y) {
    const size = 5;
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.rect(x - size/ 2, y - size / 2, size, size)
    ctx.fillStyle = 'black'
    ctx.fill()
}

function drawLine(x, y) {
    console.log("Drawing")
    const size = 5;
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    console.log("Start pt: " + dragStartPoint.x + " " + dragStartPoint.y)
    ctx.moveTo(dragStartPoint.x, dragStartPoint.y)
    ctx.lineTo(x, y)
    ctx.stroke()
}

function center(rect){
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2}
}

function createLineEdge() {
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
            const p = center(start.getBounds())// Just pick the center of the bounds for now
            const q = center(end.getBounds()) // Not the "connection points" that graphed2 uses
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
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
    remove(n) {
        this.nodes.splice(this.nodes.indexOf(n), 1)
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
    connect(e, p1, p2) {
        const n1 = this.findNode(p1)
        const n2 = this.findNode(p2)
        if (n1 !== undefined && n2 !== undefined) {
            e.connect(n1, n2)
            this.edges.push(e)
            return true
        }
        return false
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const graph = new Graph()

    let selected = undefined
    let dragStartBounds = undefined

    function drawToolBar() {
        const bar = new Path2D()
        ctx.lineWidth = 2
        bar.rect(5, 5, 990, 50)
        ctx.rect(5,5,990,50)
        ctx.fillStyle = '#99e6ff'
        ctx.fill(bar)
        ctx.stroke()
    }

    let selectStatus = false
    let deleteStatus = false
    let classStatus = false
    let interfaceStatus = false
    let packageStatus = false
    let noteStatus = false
    let dependencyStatus = false
    let inheritanceStatus = false
    let interfaceTIStatus = false
    let associationStatus = false
    let aggregationStatus = false
    let compositionStatus = false

    function drawSelectButton(){
        let select = new Path2D()
        select.rect(10, 10, 50, 40)
        ctx.stroke(select)
        ctx.fillStyle = '#000000'
        const box = ctx.fillRect(20, 20, 6, 6)
        ctx.fillRect(40, 20, 6, 6)
        ctx.fillRect(20, 35, 6, 6)
        ctx.fillRect(40, 35, 6, 6)
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(select, e.clientX, e.clientY)){
                ctx.font = "15px Arial"
                ctx.fillText("Select", 15, 70)
            }
            else {
                ctx.clearRect(0,0, canvas.width, canvas.height)
                drawToolBar()
                drawClassButton()
                drawInterfaceButton()
                drawPackageButton()
                drawNoteButton()
                drawDependencyButton()
                drawInheritanceButton()
                drawInterfaceTypeButton()
                drawAssociationButton()
                drawAggregationButton()
                drawCompositionButton()
                drawDeleteButton()
                let select = new Path2D()
                select.rect(10, 10, 50, 40)
                ctx.stroke(select)
                ctx.fillStyle = '#000000'
                const box = ctx.fillRect(20, 20, 6, 6)
                ctx.fillRect(40, 20, 6, 6)
                ctx.fillRect(20, 35, 6, 6)
                ctx.fillRect(40, 35, 6, 6)
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(select, e.clientX, e.clientY)){
                selectStatus = true
                deleteStatus = false
                classStatus = false
                interfaceStatus = false
                packageStatus = false
                noteStatus = false
                dependencyStatus = false
            }
        })
    }

    function drawClassButton(){
        let classButton = new Path2D()
        classButton.rect(63, 10, 50, 40)
        ctx.fillStyle = "white"
        ctx.rect(73,20,30,6)
        ctx.rect(73,26,30,6)
        ctx.rect(73,32,30,6)
        ctx.stroke(classButton)
        ctx.fillRect(73,20, 30, 6)
        ctx.fillRect(73,26, 30, 6)
        ctx.fillRect(73,32, 30, 6)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(classButton, e.clientX, e.clientY)){
                ctx.font = "15px Arial"
                ctx.fillText("Class", 68, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(classButton, e.clientX, e.clientY)) {
                classStatus = true
                deleteStatus = false
                selectStatus = false
                interfaceStatus = false
                packageStatus = false
                noteStatus = false
                dependencyStatus = false
            }
        })
    }

    function drawInterfaceButton(){
        let interfaceButton = new Path2D()
        interfaceButton.rect(116, 10, 50, 40)
        ctx.stroke(interfaceButton)
        ctx.fillStyle = "white"
        ctx.fillRect(126,20, 30, 6)
        ctx.fillRect(126,26, 30, 6)
        ctx.fillRect(126,32, 30, 6)
        ctx.rect(126,20,30,6)
        ctx.rect(126,26,30,6)
        ctx.rect(126,32,30,6)
        ctx.stroke()
        ctx.font = "8px Arial"
        ctx.fillStyle= "#000"
        ctx.fillText("Interface", 125, 26)
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(interfaceButton, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Interface", 115, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(interfaceButton, e.clientX, e.clientY)){
                interfaceStatus = true
                classStatus = false
                deleteStatus = false
                selectStatus = false
                packageStatus = false
                noteStatus = false
                dependencyStatus = false
            }
        })
    }

    function drawPackageButton(){
        let packageButton = new Path2D()
        packageButton.rect(169, 10, 50, 40)
        ctx.stroke(packageButton)
        ctx.fillStyle = "white"
        ctx.fillRect(179, 26, 30, 15)
        ctx.fillRect(179, 20, 20, 10)
        ctx.rect(179, 20, 20, 6)
        ctx.rect(179, 26, 30, 15)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(packageButton, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Package", 168, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(packageButton, e.clientX, e.clientY)){
                packageStatus = true
                selectStatus = false
                deleteStatus = false
                classStatus = false
                interfaceStatus = false
                noteStatus = false
                dependencyStatus = false
            }
        })
    }

    function drawNoteButton(){
        let noteButton = new Path2D()
        noteButton.rect(222, 10, 50, 40)
        ctx.stroke(noteButton)
        ctx.fillStyle = "#eae364"
        ctx.fillRect(232, 20, 30, 20)
        ctx.strokeRect(232, 20, 30, 20)
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(noteButton, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Note", 230, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(noteButton, e.clientX, e.clientY)){
                noteStatus = true
                selectStatus = false
                classStatus = false
                interfaceStatus = false
                packageStatus = false
                deleteStatus = false
                dependencyStatus = false
            }
        })
    }

    function drawDependencyButton(){
        let depButton = new Path2D()
        depButton.rect(275, 10, 50, 40)
        ctx.stroke(depButton)
        ctx.beginPath()
        ctx.setLineDash([4,5])
        ctx.moveTo(290,20)
        ctx.lineTo(315,40)
        ctx.stroke()
        ctx.beginPath()
        ctx.setLineDash([])
        ctx.moveTo(302, 42)
        ctx.lineTo(320, 45)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(314, 27)
        ctx.lineTo(320, 44)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(depButton, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Dependency", 262, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(depButton, e.clientX, e.clientY)){
                noteStatus = false
                selectStatus = false
                classStatus = false
                interfaceStatus = false
                packageStatus = false
                deleteStatus = false
                dependencyStatus = true
                console.log("Dep sel")
            }
        })
    }

    function drawInheritanceButton(){
        ctx.fillStyle = "white"
        let inButton = new Path2D()
        inButton.rect(328, 10, 50, 40)
        ctx.stroke(inButton)
        ctx.beginPath()
        ctx.moveTo(340, 20)
        ctx.lineTo(360, 36)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(352, 42)
        ctx.lineTo(370, 45)
        ctx.lineTo(364, 27)
        ctx.stroke()
        ctx.fill()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(inButton, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Inheritance", 320, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
        })
    }

    function drawInterfaceTypeButton(){
        let button = new Path2D()
        button.rect(381, 10, 50, 40)
        ctx.stroke(button)
        ctx.beginPath()
        ctx.setLineDash([4,5])
        ctx.moveTo(390, 20)
        ctx.lineTo(415, 40)
        ctx.stroke()
        ctx.beginPath()
        ctx.setLineDash([])
        ctx.moveTo(402, 42)
        ctx.lineTo(420, 45)
        ctx.lineTo(414, 27)
        ctx.stroke()
        ctx.fill()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Interface Type Implementation", 320, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
        })
    }

    function drawAssociationButton(){
        let button = new Path2D()
        button.rect(434, 10, 50, 40)
        ctx.stroke(button)
        ctx.beginPath()
        ctx.moveTo(445, 20)
        ctx.lineTo(470, 40)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(457, 42)
        ctx.lineTo(475, 45)
        ctx.lineTo(469, 27)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Association", 425, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            repaint()
        })
    }

    function drawAggregationButton(){
        ctx.fillStyle = "white"
        let button = new Path2D()
        button.rect(487, 10, 50, 40)
        ctx.stroke(button)
        ctx.beginPath()
        ctx.moveTo(500, 20)
        ctx.lineTo(503, 30)
        ctx.lineTo(513, 32)
        ctx.lineTo(508, 22)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(513,32)
        ctx.lineTo(523,42)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Aggregation", 475, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
        })
    }

    function drawCompositionButton(){
        ctx.fillStyle = "black"
        let button = new Path2D()
        button.rect(540, 10, 50, 40)
        ctx.stroke(button)
        ctx.beginPath()
        ctx.moveTo(553, 20)
        ctx.lineTo(556, 30)
        ctx.lineTo(566, 32)
        ctx.lineTo(561, 22)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(566, 32)
        ctx.lineTo(576, 42)
        ctx.stroke()
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Composition", 530, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
        })
    }

    function drawDeleteButton(){
        let button = new Path2D()
        button.rect(593, 10, 50, 40)
        ctx.stroke(button)
        ctx.beginPath()
        ctx.strokeStyle = "red"
        ctx.moveTo(603, 20)
        ctx.lineTo(633, 40)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(633, 20)
        ctx.lineTo(603, 40)
        ctx.stroke()
        ctx.strokeStyle = "black"
        canvas.addEventListener('mousemove', function(e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)){
                ctx.font = "lighter 15px Arial"
                ctx.fillText("Delete", 595, 70)
            }
            else {
            }
        })
        canvas.addEventListener('click', function (e) {
            if (ctx.isPointInPath(button, e.clientX, e.clientY)) {
                selectStatus = false
                deleteStatus = true
                classStatus = false
                packageStatus = false
                interfaceStatus = false
                noteStatus = false
                dependencyStatus = false
            }
            console.log(graph.nodes.length)
        })
    }

    drawToolBar()
    drawSelectButton()
    drawClassButton()
    drawInterfaceButton()
    drawPackageButton()
    drawNoteButton()
    drawDependencyButton()
    drawInheritanceButton()
    drawInterfaceTypeButton()
    drawAssociationButton()
    drawAggregationButton()
    drawCompositionButton()
    drawDeleteButton()

    const panel = document.getElementById('canvas')

    panel.addEventListener('dblclick', event => {
        if (selectStatus) {
            const node = Node.prototype.circleNode(event.clientX - 20, event.clientY - 100, 20, 'black')
            graph.add(node)
            graph.draw()
        }
        if (deleteStatus) {
            let mousePoint = mouseLocation(event)
            selected = graph.findNode(mousePoint)
            if (selected !== undefined) {
                graph.remove(selected)
            }
            repaint()
        }
        if (classStatus) {
            let node = Node.prototype.classNode(event.clientX - 20, event.clientY - 100)
            graph.add(node)
            graph.draw()
        }
        if (interfaceStatus){
            let node = Node.prototype.interfaceNode(event.clientX - 20, event.clientY - 100)
            graph.add(node)
            graph.draw()
        }
        if (packageStatus){
            let node = Node.prototype.packageNode(event.clientX - 20, event.clientY - 100)
            graph.add(node)
            graph.draw()
        }
        if (noteStatus){
            let node = Node.prototype.noteNode(event.clientX - 20, event.clientY - 100)
            graph.add(node)
            graph.draw()
        }
    })

    function repaint() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        graph.draw()
        if (selected !== undefined && selectStatus === true) {
            const bounds = selected.getBounds()
            drawGrabber(bounds.x, bounds.y)
            drawGrabber(bounds.x + bounds.width, bounds.y)
            drawGrabber(bounds.x, bounds.y + bounds.height)
            drawGrabber(bounds.x + bounds.width, bounds.y + bounds.height)
        }else if (selected !== undefined && dependencyStatus === true) {
            drawLine(currentx, currenty)
        }
    }

    function mouseLocation(event) {
        const rect = panel.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }

    panel.addEventListener('mousedown', event => {
        let mousePoint = mouseLocation(event)
        selected = graph.findNode(mousePoint)
        if (selected !== undefined && selectStatus === true) {
            dragStartPoint = mousePoint
            dragStartBounds = selected.getBounds()
        }else if (selected !== undefined && dependencyStatus === true) {
            dragStartPoint = mousePoint
            dragStartBounds = selected.getBounds()
        }
        repaint()
    })

    panel.addEventListener('mousemove', event => {
        if (dragStartPoint === undefined) return
        let mousePoint = mouseLocation(event)
        currentx = mousePoint.x
        currenty = mousePoint.y
        if (selected !== undefined && selectStatus === true) {
            const bounds = selected.getBounds();

            selected.translate(
                dragStartBounds.x - bounds.x
                + mousePoint.x - dragStartPoint.x,
                dragStartBounds.y - bounds.y
                + mousePoint.y - dragStartPoint.y);
            repaint()
        }else if (selected !== undefined && dependencyStatus === true) {
            console.log(mousePoint.x + " " + mousePoint.y)
            drawLine(mousePoint.x, mousePoint.y);
            repaint()
        }
    })

    panel.addEventListener('mouseup', event => {
        dragStartPoint = undefined
        dragStartBounds = undefined
    })
})
