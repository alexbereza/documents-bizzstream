import { Template } from 'meteor/templating';
import { DefinitionsCollection } from "../../../../api/definitions/definitions";
import { LayoutsCollection } from "../../../../api/layouts/layouts";

Template.List_Definition_Page.helpers({

    /**
     * Get List of Definitions
     *
     * @returns {Mongo.Cursor}
     */
    definitionsList() {
        return DefinitionsCollection.find();
    },

    /**
     * Get List of Layouts
     *
     * @param definitionId
     * @returns {Mongo.Cursor}
     */
    layoutsList(definitionId){
        return LayoutsCollection.find(
            {definitionId: definitionId}
        );
    }

});