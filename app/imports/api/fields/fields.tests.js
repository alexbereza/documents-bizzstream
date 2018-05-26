import {Meteor} from 'meteor/meteor';
import {assert} from 'meteor/practicalmeteor:chai';
import {FieldsCollection} from './fields';

if (Meteor.isServer) {

    describe('Fields Collection', function () {

        let id;

        beforeEach(function () {

            // Before start remove all Fields Collection Data
            FieldsCollection.remove({});

            // Insert new Collection
            id = FieldsCollection.insert({
                label: "Label",
                name: "name",
                type: "text",
                maxLength: 10
            });

        });

        // Create Field
        it('Can create field', function () {

            const currentField = FieldsCollection.find({_id: id});

            assert.equal(currentField.count(), 1);

        });


        // Update field
        it('Can update Field Collection', function () {

            FieldsCollection.update(
                {_id: id},
                {$set: {label: "Updated Label"}}
            );
            const currentField = FieldsCollection.findOne({_id: id});

            assert.notEqual(currentField.label, "Label");
            assert.equal(currentField.label, "Updated Label");

        });


        // Delete Field
        it('Can delete field', function () {

            FieldsCollection.remove(id);
            assert.equal(FieldsCollection.find().count(), 0);

        });

    });

}
