import {Meteor} from 'meteor/meteor';
import {assert} from 'meteor/practicalmeteor:chai';
import {FieldsCollection} from '../fields/fields';
import {DefinitionsCollection} from "../definitions/definitions";
import {LayoutsCollection} from "./layouts";

if (Meteor.isServer) {

    describe('Layouts Collection', function () {

        let id;

        beforeEach(function () {

            // Before start remove all Fields Collection Data
            FieldsCollection.remove({});
            DefinitionsCollection.remove({});
            LayoutsCollection.remove({});

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

            if (LayoutsCollection.find().count() === 0) {

                const definitionId = DefinitionsCollection.insert({
                    name: "Default definition",
                    schema: {
                        fields: [fieldsSeedsName, fieldsSeedsAge]
                    }
                });

                id = LayoutsCollection.insert({
                    name: "Default Layout",
                    label: "Default Label",
                    definitionId: definitionId,
                    header: {
                        rows: [
                            {
                                columns: [
                                    {fieldId: fieldsSeedsName._id,},
                                    {fieldId: fieldsSeedsAge._id,}
                                    ]
                            }
                        ]
                    },
                    buttons: ["Submit"]
                });
            }

        });

        it('Can create Layout', function () {

            const currentLayout = LayoutsCollection.find({_id: id});

            assert.equal(currentLayout.count(), 1);

        });


    });

}
