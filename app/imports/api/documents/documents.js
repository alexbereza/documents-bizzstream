import { Mongo } from 'meteor/mongo';
import { DocumentSchema } from './schemas/DocumentSchema';
import { DocumentFieldSchema }  from './schemas/DocumentSchema';

/**
 * Documents Collection
 * @type {Mongo.Collection}
 */
const DocumentsCollection = new Mongo.Collection('documents');
DocumentsCollection.attachSchema(DocumentSchema);
DocumentsCollection.attachSchema(DocumentFieldSchema);

/**
 * Export
 */
export { DocumentsCollection }
