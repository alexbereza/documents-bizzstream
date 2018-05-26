import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/list', {
    name: 'List_Stuff_Page',
    action() {
        BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
    },
});

FlowRouter.route('/add', {
    name: 'Add_Stuff_Page',
    action() {
        BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
    },
});

FlowRouter.route('/stuff/:_id', {
    name: 'Edit_Stuff_Page',
    action() {
        BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
    },
});