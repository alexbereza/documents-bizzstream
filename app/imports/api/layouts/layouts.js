import { Mongo } from 'meteor/mongo';
import { LayoutSchema } from './schemas/LayoutSchema';

/**
 * Layouts collection
 *
 * @type {Mongo.Collection | *}
 */
const LayoutsCollection = new Mongo.Collection('layouts');
LayoutsCollection.attachSchema(LayoutSchema);

/**
 * Export
 */
export { LayoutsCollection }
