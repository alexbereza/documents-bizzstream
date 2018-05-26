import { Mongo } from 'meteor/mongo';
import { FieldSchema } from './schemas/FieldSchema';

/**
 * Fields Collection
 *
 * @type {Mongo.Collection}
 */
const FieldsCollection = new Mongo.Collection('fields');
FieldsCollection.attachSchema(FieldSchema);

/**
 * Export
 */
export { FieldsCollection }