import {Template} from 'meteor/templating';
import {DocumentsCollection} from "../../../../api/documents/documents";

Template.List_Document_Page.helpers({

    /**
     * Get list of Documents
     *
     * @returns {Mongo.Cursor}
     */
    documentsList() {
        return DocumentsCollection.find();
    }
});