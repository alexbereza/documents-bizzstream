import {Template} from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { LayoutsCollection } from "../../../../api/layouts/layouts";
import { FieldsCollection } from "../../../../api/fields/fields";
import { DocumentsCollection } from "../../../../api/documents/documents";
import {FieldSchema} from "../../../../api/fields/schemas/FieldSchema";


const createContext = FieldSchema.namedContext('Add_Document_Page');

Template.Add_Field_Page.onCreated(function onCreated() {

    this.messageFlags = new ReactiveDict();
    this.context = createContext;
});

/**
 * Helpers
 */
Template.Add_Document_Page.helpers({

    // Get Layout data
    definitionLayout(){

        // Get layout data
        const layout = LayoutsCollection.findOne({definitionId: FlowRouter.getParam('definitionId')});

        return layout;
    },


    // Get all Fields from Layout
    layoutFields() {

        // Get layout data
        const layout = LayoutsCollection.findOne({definitionId: FlowRouter.getParam('definitionId')});

        // TODO: Get all Fields ID
        //       Temporary get all fields

        return FieldsCollection.find();
    }
});


/**
 * Events
 */
Template.Add_Document_Page.events({

    // Cancel operation
    'click #Cancel': function(event) {

        event.preventDefault();
        // Redirect
        FlowRouter.go('List_Definition_Page');
    },

    // Save form operation
    'submit .add-document-form': function(event) {

        event.preventDefault();

        const generatedFields = [];


        const formFieldsData = $(event.target).find("input.js-field-data");
        const documentName = $(event.target).find("input[name=document_name]").val();
        const documentLabel = $(event.target).find("input[name=document_label]").val();
        console.log(formFieldsData);

        /**
         * Generate Fields
         */
        formFieldsData.each((idx, element) => {

            // Get field unique ID
            let fieldId = $(element).attr('id');

            if (fieldId) {

                let field = FieldsCollection.findOne({ _id: fieldId }); // Get Fields by ID

                if (field) {
                    const fieldValue = $(element).val(); // Set value of field
                    const documentField = {
                        label: fieldValue,
                        field: field
                    };

                    generatedFields.push(documentField);
                } else {
                    console.log(`Can't get Field data`);
                }
            }
        });

        console.log(generatedFields);


        if (!generatedFields || generatedFields <= 0) {
            console.log(`Fields are not filled`); return;
        }

        try {
            // Check if all requirements met
            if (generatedFields && generatedFields.length > 0
                && documentName && documentLabel) {

                const newDocumentData = {
                    name: documentName,
                    label: documentLabel,
                    fields: generatedFields
                };

                // Create new Document in collection
                const id = DocumentsCollection.insert(newDocumentData);

                console.log(`Document Successfully Added. Document Id: ${id}`);


                // Clear all form data
                $(event.target).find("input").val("");

                // Redirect
                FlowRouter.go('List_Document_Page');
            }
        } catch (e) {
            console.log(`Document Creation Failed`);
        }

    },
});