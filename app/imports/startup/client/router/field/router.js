import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/field/list', {
    name: 'List_Field_Page',
    action() {
        BlazeLayout.render('App_Body', {main: 'List_Field_Page'})
    }
});

FlowRouter.route('/field/add', {
    name: 'Add_Field_Page',
    action() {
        BlazeLayout.render('App_Body', {main: 'Add_Field_Page'})
    }
});

