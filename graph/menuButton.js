'use strict'
class MenuButton {
    constructor(title, eventListener, action) {//action: a function passed in by user for the listener to execute
        this.eventListener = document.addEventListener('click', action)
        draw(title)
        isSelected = false
    }

    isSelected(){
        return isSelected
    }

    setSelected(){
        isSelected = true
    }

    
    

}