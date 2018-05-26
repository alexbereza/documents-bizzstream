import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FieldSchema }  from '../../fields/schemas/FieldSchema';

/*
{
   "schema":{
      "label": "Label",

      "fields":[
         {
            "_id":"cc4cb134-fda0-44d8-8e92-e42ebbceb415",
            "label":"Client Name",
            "name":"name",
            "type":"Text",
            "maxLength":100
         },
         {
            "_id":"228b905f-4a43-4a40-b829-0c6a04ad4782",
            "label":"Client Age",
            "name":"age",
            "type":"number"
         }
      ]
   }
}
 */

/**
 * Document field
 * @type {SimpleSchema}
 */
const DocumentFieldSchema = new SimpleSchema({
    label: {
        type: "String",
    },
    field: {
        type: FieldSchema,
    },
});

/**
 * Document schema
 * @type {SimpleSchema}
 */
const DocumentSchema = new SimpleSchema({
    name: {
        type: String,
    },
    label: {
        type: String,
    },
    fields: {
        type: [ DocumentFieldSchema ]
    },
});

/**
 * Export
 */
export { DocumentSchema }