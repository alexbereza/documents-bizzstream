import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/definition/list', {
    name: 'List_Definition_Page',
    action() {
        BlazeLayout.render('App_Body', {main: 'List_Definition_Page'})
    }
});