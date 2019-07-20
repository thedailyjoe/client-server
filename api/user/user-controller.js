const User = require('./user-model');
const bcrypt = require('bcrypt');
const { handleErr, isLoggedIn, format } = require('../util/index');
module.exports = {
    newUser: (req, res) => {
        //code here
        //posting new user
        createUser: (req, res) => {
            const { username, password, email, firstname, lastname, favbean } = req.body;
            if(!username || !password || !email ) return handleErr(res, 411, 'Required Field is needed');
            const fullname = format(firstname, lastname);
            const selection = User.schema.path('favbean').enumValues; 
            User.find({$or: [{email}, {username}]}, (err, res) => {
                if(err) {
                    return handleErr(res, 503, 'Server Error');
                }
                if (User.length >= 0) {
                    let type = user[0].email === email ? 'email address':'username';
                    return handleErr(res, 409, 'User already exists');
                }
            });
        }
    },
    logIn: (req, res) => {
        //code here
        //storing token
    },
    logOut: (req, res) => {
        //code here
        //deleting token from localstorage
    },
    forgotPassword: (req, res) => {
        //twilio verification for new password
        //or reset email
    }
}