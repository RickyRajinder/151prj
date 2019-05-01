'use strict'

class PropertySheet {

    //TODO: Add OK, Cancel buttons
    //TODO: Implement event handlers for those buttons

    /**
     * Construct a new property sheet
     * @param {Modifiable} owner 
     */
	constructor(owner) {
        this.owner = owner;
        this.addChangeListener = [];
    }
    
    /**
     * Show property sheet
     */
    show() {
        // Get owner's properties map
        properties = this.owner.getProperties();
        //TODO: Open a property editor window with
        
        //owner's property prefilled
    }

    /**
     * Collect and update property of owner
     */
    set() {
        newProperties = //TODO: Collect data from property editor dialog window 
        // Then
        owner.setProperties(newProperty);
    }
    
    createButton(){
        
    }
}
        
