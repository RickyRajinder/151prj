edgeList = []
console.log("Test")
var a = node()
a.setName("a")
console.log(a.name)
var b = node()
b.setName("b")
a.addLink(b, "Aggregation")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

function drawToolBar() {
    const bar = new Path2D()
    ctx.lineWidth = 2
    bar.rect(5, 5, 990, 50)
    ctx.rect(5,5,990,50)
    ctx.fillStyle = '#99e6ff'
    ctx.fill(bar)
    ctx.stroke()
}

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
}

function drawClassButton(){
    let classButton = new Path2D()
    classButton.rect(63, 10, 50, 40)
    ctx.fillStyle = "white"
    ctx.fillRect(73,20, 30, 6)
    ctx.fillRect(73,26, 30, 6)
    ctx.fillRect(73,32, 30, 6)
    ctx.rect(73,20,30,6)
    ctx.rect(73,26,30,6)
    ctx.rect(73,32,30,6)
    ctx.stroke(classButton)
    ctx.stroke()
    canvas.addEventListener('mousemove', function(e) {
        if (ctx.isPointInPath(classButton, e.clientX, e.clientY)){
            ctx.font = "15px Arial"
            ctx.fillText("Class", 68, 70)
        }
        else {
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
            ctx.fillText("Interface", 118, 70)
        }
        else {
        }
    })
}

function drawPackageButton(){
    let packageButton = new Path2D()
    packageButton.rect(169, 10, 50, 40)
    ctx.stroke(packageButton)
    ctx.fillStyle = "white"

}

drawToolBar()
drawSelectButton()
drawClassButton()
drawInterfaceButton()

function node(){
    const name = null
    return{
        setName(newName){
            this.name = newName
        },
        getName(){
            return name
        },
        addLink(node, type){
            edgeList.push(new edge(this, node, type));
            console.log("A new Edge has been pushed With the following attributes:")
            console.log("Start node: " + edgeList[edgeList.length - 1].start.name)
            console.log("End node: " + edgeList[edgeList.length - 1].end.name)
            console.log("Connection type: " + edgeList[edgeList.length - 1].edgeType)
        }
    }
}


function classNode(){
    classNode.prototype = Object.create(node.prototype)
    attributes = null
    methods = null
    return{
        setAttributes(newAttributes){
            this.attributes = newAttributes
        },
        setMethods(newMethods){
            this.methods = newMethods
        }
    }
}

function inheritanceNode(){
    inheritanceNode.prototype = Object.create(node.prototype)
    attributes = null
    methods = null
    return{
        setAttributes(newAttributes){
            this.attributes = newAttributes
        },
        setMethods(newMethods){
            this.methods = newMethods
        }
    }
}

function noteNode(){
    inheritanceNode.prototype = Object.create(node.prototype)
    contents = null;
    return{
        setContents(text){
            this.contents = text
        },
        getContents(){
            return this.contents
        }
    }
}

function edge(start, end, type){
    this.start = start
    this.end = end
    this.edgeType = type
    
}