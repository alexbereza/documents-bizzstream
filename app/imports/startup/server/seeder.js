import {Meteor} from 'meteor/meteor';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import {FieldsCollection} from '../../api/fields/fields';
import {DefinitionsCollection} from '../../api/definitions/definitions';
import {LayoutsCollection} from '../../api/layouts/layouts';
import {DocumentsCollection} from '../../api/documents/documents';

if (Meteor.isServer) {

    Meteor.startup(() => {

        /**
         * Reset database
         */
        // resetDatabase();

        /**
         * Populate list of fields to pre-fill the Collection.
         * @type {*[]}
         */
        const fieldsSeeds = [
            {
                label: "Client Name",
                name: "name",
                type: "text",
                maxLength: 100
            },
            {
                label: "Client Age",
                name: "age",
                type: "number"
            },
        ];

        /**
         * Initialize the Fields collection if empty with seed data.
         *
         */
        if (FieldsCollection.find().count() === 0) {

            _.each(fieldsSeeds, function fieldsSeeds(field) {

                FieldsCollection.insert(field);
            });
        }

        // Get Field with Name -> name
        const fieldsSeedsName = FieldsCollection.findOne({name: "name"});
        // Get Field with Name -> age
        const fieldsSeedsAge = FieldsCollection.findOne({name: "age"});

        if (LayoutsCollection.find().count() === 0) {
            // Populate definition
            const definitionId = DefinitionsCollection.insert({
                name: "Default definition",
                schema: {
                    fields: [fieldsSeedsName, fieldsSeedsAge]
                }
            });

            // Populate layout collection

            LayoutsCollection.insert({
                name: "Default Layout",
                label: "Default Label",
                definitionId: definitionId,
                header: {
                    rows: [
                        {
                            columns: [{fieldId: fieldsSeedsName._id,}, {fieldId: fieldsSeedsAge._id,}]
                        }
                    ]
                },
                buttons: ["Cancel", "Submit"]
            });
        }


        /**
         * Document Field Seeds
         *
         * @type {*[]}
         */
        const documentFieldsSeeds = [
            {
                label: "User 1",
                field: fieldsSeedsName
            },
            {
                label: "25",
                field: fieldsSeedsAge
            },
        ];


        /**
         * Document fields
         *
         * @type {*[]}
         */
        const documentsSeeds = [
            {
                name: "First document",
                label: "First document label",
                fields: documentFieldsSeeds
            }
        ];

        // Populate documents
        if (DocumentsCollection.find().count() === 0) {

            _.each(documentsSeeds, function documentsSeeds(document) {

                DocumentsCollection.insert(document);
            });

        }


    });
}