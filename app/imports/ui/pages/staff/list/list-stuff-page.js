import { Template } from 'meteor/templating';
import { StuffsCollection } from '../../../../api/stuffs/stuffs.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuffs Collections
   */
  stuffList() {
    return StuffsCollection.find();
  },
});
