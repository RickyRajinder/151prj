console.log("Test")
var l = "wow"
console.log(l)
var a = node()
a.setName("a")
console.log(a.name)
var b = node()
b.setName("b")
a.addLink(b)
console.log("Hello")

function node(){
    name = null
    nextNodes = []
    return{
        setName(newName){
            this.name = newName
        },
        getName(){
            return name
        },
        addLink(node){
            nextNodes.push(node);
            console.log(node.name + " has been pushed")
        }
    }
}


function classNode(){
    classNode.prototype = Object.create(node.prototype)
    attributes = null
    methods = null
    return{
        setAttributes(newAttributes){
            node.attributes = newAttributes
        },
        setMethods(newMethods){
            node.methods = newMethods
        }
    }
}

function inheritanceNode(){
    inheritanceNode.prototype = Object.create(node.prototype)
    attributes = null
    methods = null
    return{
        setAttributes(newAttributes){
            node.attributes = newAttributes
        },
        setMethods(newMethods){
            node.methods = newMethods
        }
    }
}
