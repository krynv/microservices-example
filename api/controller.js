import properties from '../package.json';
import users from '../service/users';

const controllers = {
    about: (req, res) => {
        let aboutInfo = {
            name: properties.name,
            version: properties.version
        }

        res.json(aboutInfo);
    },

    getUsers: (req, res) => {
        users.find(req, res, (err, users) => {
            if (err) res.send(err);
            res.json(users);
        });
    },
};

module.exports = controllers;
