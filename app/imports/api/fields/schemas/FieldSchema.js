import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
{
    "_id": "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
    "label": "Client Name",
    "name": "name",
    "type": "Text",
    "maxLength": 100
}
 */

/**
 * Field Schema
 *
 * {_id, label, name, type, maxLength}
 * @type {SimpleSchema}
 */
const FieldSchema = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    },
    label: {
        type: String,
        label: "Label"
    },
    name: {
        type: String,
        label: "Name"
    },
    type: {
        type: String,
        label: "Type"
    },
    maxLength: {
        type: Number,
        label: "Length",
        optional: true
    },
});

export { FieldSchema }