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

    var canvas = document.getElementById('canvas');
    canvas.addEventListener("mousedown", mouseIsDown, false)
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for(i = 0; i < nodeList.length; i++){
            //draws the nodes created at their position as a 10x10 square
            ctx.fillRect(nodeList[i].getx(), nodeList[i].gety(), 10, 10)
        }
    }
}


//event where mouse is down gives position relative to upper left corner of document, not canvas. needs fixing.
function mouseIsDown(event){
    canvas_x = event.pageX
    canvas_y = event.pageY
    alert("X = " + canvas_x + "Y = " + canvas_y)
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