import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { StuffsCollection } from '../../../../api/stuffs/stuffs.js';

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({

    AddStuffForm: {
        /**
         * After successful form submission, go to List_Stuff_Page.
         * @param formType The form.
         * @param result The result of form submission.
         */
        onSuccess: function onSuccess(formType, result) {
             FlowRouter.go('List_Stuff_Page');
        },
    },
});

Template.Add_Stuff_Page.helpers({
  stuffCollection() {
    return StuffsCollection;
  },
});
