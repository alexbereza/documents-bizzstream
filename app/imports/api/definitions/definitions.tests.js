import {Meteor} from 'meteor/meteor';
import {assert} from 'meteor/practicalmeteor:chai';
import {DefinitionsCollection} from './definitions';
import {FieldsCollection} from "../fields/fields";

if (Meteor.isServer) {

    describe('Definitions Collection', function () {

        let id;

        beforeEach(function () {

            // Before start remove all Collection Data
            DefinitionsCollection.remove({});
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

            // Insert new Collection
            id = DefinitionsCollection.insert({
                name: "Default definition",
                schema: {
                    fields: [fieldsSeedsName, fieldsSeedsAge]
                }
            });

        });

        // Create Definition
        it('Can create definition', function () {

            const currentDefinition = DefinitionsCollection.find({_id: id});

            assert.equal(currentDefinition.count(), 1);

        });


    });

}
