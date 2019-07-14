const User = require('./user-model');
const bcrypt = require('bcrypt');
module.exports = {
    newUser: (req, res) => {
        //code here
        //posting new user
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