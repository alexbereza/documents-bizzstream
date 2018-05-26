import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Get Document List
FlowRouter.route('/document/list', {
    name: 'List_Document_Page',
    action() {
        BlazeLayout.render('App_Body', {main: 'List_Document_Page'})
    }
});


// Add Document For Definition in Layout
FlowRouter.route('/document/add/layout/:layoutId/definition/:definitionId', {
    name: 'Add_Document_Page',
    action() {
        BlazeLayout.render('App_Body', {main: 'Add_Document_Page'})
    }
});