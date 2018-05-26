import {Template} from "meteor/templating";
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FieldsCollection } from '../../../../api/fields/fields';
import { FieldSchema } from '../../../../api/fields/schemas/FieldSchema';

export const fieldTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
];

const displaySuccessMessage = 'Field insert success';
const createContext = FieldSchema.namedContext('Add_Field_Page');

/**
 * Helpers
 */
Template.Add_Field_Page.helpers({

    fieldTypes() {
        return fieldTypes;
    }

});


Template.Add_Field_Page.onCreated(function onCreated() {

    this.messageFlags = new ReactiveDict();
    this.messageFlags.set(displaySuccessMessage, false);
    this.context = createContext;
});


/**
 * Events
 */
Template.Add_Field_Page.events({

    'submit .field-data-form': function(event) {

        event.preventDefault();

        // Get all fields values
        const field_label = event.target.field_label.value;
        const field_name = event.target.field_name.value;
        const field_type = event.target.field_type.value;
        const field_max_length = event.target.field_max_length.value;

        if (field_label && field_name) {

            const newStudentData = {
                label: field_label,
                name: field_name,
                type: field_type,
                maxLength: field_max_length
            };

            // Save new field
            const id = FieldsCollection.insert(newStudentData);

            console.log(`Field Successfully Added. Field Id: ${id}`);
        }

        $(event.target).find("input").val("");

        // Redirect
        FlowRouter.go('List_Field_Page');

    },
});