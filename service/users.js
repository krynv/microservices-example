import request from 'request';

let usersAPI = 'https://jsonplaceholder.typicode.com/users';

const users = {
    find: (req, res, next) => {
        request(usersAPI, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                response = JSON.parse(body);
                res.send(response);
            } else {
                console.error(`${response.statusCode} ${response.body}`);
                res.send({ users: [] });
            }
        });
    }
};

module.exports = users;