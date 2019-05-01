'use strict'
class MenuButton {
    constructor(action) {//action: a function passed in by user for the listener to execute
        //type: of button (node, edge, ...)
        this.eventListener = document.addEventListener('click', action);
        isSelected = false;
    }

    isSelected(){
        return isSelected;
    }

    setSelected(){
        isSelected = true;
    }
}