import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*
{
    "label": "Label",
    "definitionId": "5349b4ddd2781d08c09890f4",

    "header": {
        "rows": [
        {
            "columns": [
            {
                "fieldId": "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
            },
            {
                "fieldId": "228b905f-4a43-4a40-b829-0c6a04ad4782"
            } ]
        } ]
    },
    "buttons": [
        "save"
    ]
}
 */

/**
 * Field ID Schema
 *
 * @type {SimpleSchema}
 */
const FieldIdSchema = new SimpleSchema({
    fieldId: {
        regEx: SimpleSchema.RegEx.Id,
        type: String,
    }
});

/**
 * Row schema
 *
 * @type {SimpleSchema}
 */
const RowsSchema = new SimpleSchema({
    columns: {
        type: [ FieldIdSchema ]
    },
});

/**
 * Header Schema
 *
 * @type {SimpleSchema}
 */
const HeaderSchema = new SimpleSchema({
    rows: {
        type: [ RowsSchema ]
    },
});

/**
 * LayoutSchema
 *
 * @type {SimpleSchema}
 */
const LayoutSchema = new SimpleSchema({

    name: {
        type: String,
    },
    label: {
        type: String,
    },
    definitionId: {
        regEx: SimpleSchema.RegEx.Id,
        type: String,
    },
    header: {
        type: HeaderSchema,
    },
    buttons: {
        type: [ String ],
    },
});



/**
 * Export
 *
 */
export { LayoutSchema }

