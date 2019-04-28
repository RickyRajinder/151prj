
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

//arrays to hold edges and nodes, respectively
edgeList = []
nodeList = []

//base node that is inherited by all the other nodes
function node(){
    this.name = null
    this.x = null
    this.y = null
    nodeList.push(this)
}

node.prototype.setName = function(newName){
    this.name = newName
}
node.prototype.getName = function(){
    return this.name
}
node.prototype.setPosition = function(x, y){
    this.x = x
    this.y = y
}
node.prototype.getx = function(){
    return this.x
}
node.prototype.gety = function(){
    return this.y
}
node.prototype.print = function(){
    console.log("Hello, i am node " + this.name)
    console.log("I have coordinates " + this.x + ", " + this.y)
}

//classNode - ndoe for class type nodes

function classNode(){
    node.call(this)
    attributes = null;
    methods = null;

}
classNode.prototype.setMethods = function(method){
    this.methods = method
}
classNode.prototype.getMethods = function(){
    return this.methods
}

//inheritanceNode - node for inheritance type nodes

classNode.prototype = Object.create(node.prototype)
classNode.prototype.setAttributes = function(attribute){
    this.attributes = attribute
}
classNode.prototype.getAttributes = function(){
    return this.attributes
}
classNode.prototype.setMethods = function(method){
    this.methods = method
}
classNode.prototype.getMethods = function(){
    return this.methods
}

//inheritanceNode - node for inheritance type nodes

function inheritanceNode(){
    node.call(this)
    attributes = null;
    methods = null;
}

inheritanceNode.prototype = Object.create(node.prototype)
inheritanceNode.prototype.setAttributes = function(attribute){
    this.attributes = attribute
}
inheritanceNode.prototype.getAttributes = function(){
    return this.attributes
}
inheritanceNode.prototype.setMethods = function(method){
    this.methods = method
}
inheritanceNode.prototype.getMethods = function(){
    return this.methods
}

//noteNode - node for note type nodes

//noteNode - node for note type nodes

function noteNode(){
    node.call(this)
    this.contents = null
}

noteNode.prototype = Object.create(node.prototype)
node.prototype.setContents = function(contents){
    this.contents = contents
}
node.prototype.getContents = function(){
    return this.contents
}
//creates an edge with given data, start node, end node, and type of edge
function edge(start, end, type){
    this.start = start
    this.end = end
    this.edgeType = type
    edgeList.push(this);
}

//removes an edge from the location
function removeEdge(location){

    console.log(edgeList[location].start.name)
    console.log(edgeList[location].end.name)
    console.log(edgeList[location].edgeType)
    edgeList.splice(location, 1)
    console.log("An edge has been removed.")
}

//removes a node from the node list
function removeNode(location){
    console.log("I am removing " + nodeList[location].getName())
    nodeList.splice(location, 1)
}

//draw method for the canvas, will draw the nodes created at the location on the canvas
function draw() {
    //create a node a at position 0, 0
    var a = new node()
    a.setPosition(0, 0)
    //create a node b at position 0, 0
    var b = new node()
    b.setPosition(10, 10)

    const canvas = document.getElementById('canvas');
    canvas.addEventListener("mousedown", mouseIsDown, false)
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        for(i = 0; i < nodeList.length; i++){
            //draws the nodes created at their position as a 10x10 square
           // ctx.fillRect(nodeList[i].getx(), nodeList[i].gety(), 10, 10)
        }
    }
}

draw()

//event where mouse is down gives position relative to upper left corner of document, not canvas. needs fixing.
function mouseIsDown(event){
    canvas_x = event.pageX
    canvas_y = event.pageY
    alert("X = " + canvas_x + "Y = " + canvas_y)
    ctx.clearRect(0,0, canvas.width, canvas.height)
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
    ctx.fillRect(500,400,50,50)
}

//just code for testing, can ignore
/*
var a = new node()
console.log(a.getName())
a.setName("a")
console.log(a.getName())
a.setPosition(0, 0)

var b = new classNode()
b.setName("wow")
console.log(b.getName())
b.setAttributes("hasDog")
console.log(b.getAttributes())
b.setPosition(10,10)

var c = new noteNode()
c.setName("wowo")
console.log(c.getName())
c.setContents("hasDog")
console.log(c.getContents())
c.setPosition(20,20)

console.log("There are " + nodeList.length + " nodes in this list now.")
for(i = 0; i < nodeList.length; i++){
    nodeList[i].print()
}

removeNode(0)
console.log("There are " + nodeList.length + " nodes in this list now.")
for(i = 0; i < nodeList.length; i++){
    nodeList[i].print()
}
*/