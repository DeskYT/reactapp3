export default {
    api: {
        baseUrl: 'http://randomuser.me/api',
        seed: 'pd2020',
        user: {
            fields: ['name', 'gender', 'email', 'picture', 'dob'],
            allowedParams: ['page', 'seed', 'results', 'inc'],
        },
    },
};