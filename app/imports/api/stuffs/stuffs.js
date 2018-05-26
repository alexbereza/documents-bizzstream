import { Mongo } from 'meteor/mongo';
import { StuffSchema } from './schemas/StuffSchema';

/**
 * Stuffs Collection
 *
 * @type {Mongo.Collection}
 */
const StuffsCollection = new Mongo.Collection('stuffs');
StuffsCollection.attachSchema(StuffSchema);

/**
 * Export
 */
export { StuffsCollection };