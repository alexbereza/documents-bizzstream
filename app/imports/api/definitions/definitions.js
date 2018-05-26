import { Mongo } from 'meteor/mongo';
import { DefinitionSchema } from './schemas/DefinitionSchema';

/**
 * Definitions collection
 *
 * @type {Mongo.Collection | *}
 */
const DefinitionsCollection = new Mongo.Collection('definitions');
DefinitionsCollection.attachSchema(DefinitionSchema);


/**
 * Export
 *
 */
export { DefinitionsCollection }
