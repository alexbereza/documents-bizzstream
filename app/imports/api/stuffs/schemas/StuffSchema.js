import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const StuffSchema = new SimpleSchema({
    name: {
        label: 'Name',
        type: String,
        optional: false,
        max: 20,
        autoform: {
            group: 'Stuff',
            placeholder: 'Bicycle',
        },
    },
    quantity: {
        label: 'Quantity',
        type: Number,
        optional: false,
        autoform: {
            group: 'Stuff',
            placeholder: '3',
        },
    },
});

export { StuffSchema }

