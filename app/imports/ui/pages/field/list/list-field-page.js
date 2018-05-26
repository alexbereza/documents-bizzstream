import { Template } from 'meteor/templating';
import { FieldsCollection } from '../../../../api/fields/fields';

Template.List_Field_Page.helpers({


    /**
     * Get list of Fields
     *
     * @returns {Mongo.Cursor}
     */
    fieldsList() {
        return FieldsCollection.find();
    },

    /**
     * Index increment
     * @param index
     * @returns {*}
     */
    incremented(index){
        index++;
        return index;
    },
});