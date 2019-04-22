edgeList = []
console.log("Test")
var a = node()
a.setName("a")
console.log(a.name)
var b = node()
b.setName("b")
a.addLink(b, "Aggregation")

$(function () {
    $('#classtoolbar').w2toolbar({
        name: 'toolbar',
        items: [
            {type: 'button', id: 'select', icon: 'rectangle', caption: 'Select'},
            {type: 'break' },
            {type: 'button', id: 'class', caption: 'Class'},
            {type: 'break' },
            {type: 'button', id: 'interface', caption: 'Interface'},
            {type: 'break' },
            {type: 'button', id: 'package', caption: 'Package'},
            {type: 'break' },
            {type: 'button', id: 'note', caption: 'Note'},
            {type: 'break' },
        ]
    });
});
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