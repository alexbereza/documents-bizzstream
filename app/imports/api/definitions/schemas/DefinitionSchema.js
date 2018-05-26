import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FieldSchema } from '../../fields/schemas/FieldSchema';

/**
 * Fields Option Schema
 *
 * @type {SimpleSchema}
 */
const FieldsOptionSchema = new SimpleSchema({
    fields: {
        type: [FieldSchema],
    },
});

/**
 * Definitions schema
 *
 * @type {SimpleSchema}
 */
const DefinitionSchema = new SimpleSchema({
    name : {
        type: "String",
    },
    schema: {
        type: FieldsOptionSchema,
    },
});

export { DefinitionSchema }