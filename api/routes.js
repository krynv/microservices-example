import controller from './controller';

module.exports = (app) => {
    app.route('/about').get(controller.about);
    app.route('/users').get(controller.getUsers);
};
