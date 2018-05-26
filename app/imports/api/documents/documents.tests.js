import {Meteor} from 'meteor/meteor';
import {assert} from 'meteor/practicalmeteor:chai';
import {DocumentsCollection} from './documents';
import {FieldsCollection} from "../fields/fields";

if (Meteor.isServer) {

    describe('Documents Collection', function () {

        let id;

        beforeEach(function () {

            // Before start remove all Collection Data
            DocumentsCollection.remove({});
            FieldsCollection.remove({});

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

            if (FieldsCollection.find().count() === 0) {

                _.each(fieldsSeeds, function fieldsSeeds(field) {

                    FieldsCollection.insert(field);
                });
            }

            const fieldsSeedsName = FieldsCollection.findOne({name: "name"});
            const fieldsSeedsAge = FieldsCollection.findOne({name: "age"});

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

            const documentsSeeds = {
                name: "First document",
                label: "First document label",
                fields: documentFieldsSeeds
            };

            // Insert new Collection
            if (DocumentsCollection.find().count() === 0) {

                id = DocumentsCollection.insert(documentsSeeds);

            }


        });

        // Create Definition
        it('Can create document', function () {

            const currentDocument = DocumentsCollection.find({_id: id});

            assert.equal(currentDocument.count(), 1);

        });


    });

}
