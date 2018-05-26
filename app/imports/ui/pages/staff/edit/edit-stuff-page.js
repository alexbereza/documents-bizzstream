import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { StuffsCollection } from '../../../../api/stuffs/stuffs.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
    EditStuffForm: {
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

Template.Edit_Stuff_Page.helpers({
    getDoc() {
        return StuffsCollection.findOne(FlowRouter.getParam('_id'));
    },

    stuffCollection() {
        return StuffsCollection;
    },
});

