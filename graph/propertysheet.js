'use strict'

class PropertySheet {
    
    /**
     * Construct a new property sheet
     * @param {Modifiable} owner
     * @param modalname
     * @param modalwrapper
     * @param modalwindow
     * @param modalform
     */
	constructor(owner, modalwrapper, modalwindow, modalform) {
        this.owner = owner;
        this.addChangeListener = [];
        this.text = ""
    }

    /**
     * Show property editor
     * @param {*} e 
     */
    show(e) {
        let properties = owner.getProperties();
        openPropertyModal(properties);
    }

    /**
     * Abstract method for open 
     * property editor modal window
     * @param {Event} event
     * @param {*} properties 
     */
    openPropertyModal(event, properties) {
        throw "Abstract method"
    }

    /**
     * Close property editor
     * @param {*} event 
     */
    close(e) {
        let newProperties = closePropertyModal();
        setProperties(newProperties);
    }

    /**
     * Abstract method for closing
     * property editor modal window
     * @return collected new properties
     */
    closePropertyModal() {
        throw "Abstract method"
    }

    /**
     * 
     */
    getText(){
        return this.text
    }

    /**
     * Collect and update property of owner
     */
    setProperties(properties) { 
        owner.setProperties(properties);
    }

    /**
     * Get properties dictionary from owner
     * @param {*} modalform 
     */
    getProperties() {
        return owner.getProperties();
    }
}

//export default PropertySheet