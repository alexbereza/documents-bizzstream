import { _ } from 'meteor/underscore';
import { StuffsCollection } from '../../../api/stuffs/stuffs.js';

/**
 * A list of Stuffs to pre-fill the Collection.
 * @type {*[]}
 */
const stuffsSeeds = [
    {
        name: 'Basket',
        quantity: 3
    },
    {
        name: 'Bicycle',
        quantity: 2
    },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (StuffsCollection.find().count() === 0) {
  _.each(stuffsSeeds, function seedStuffs(stuff) {
      StuffsCollection.insert(stuff);
  });
}
