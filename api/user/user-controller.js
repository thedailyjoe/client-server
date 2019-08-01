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
                bcrypt.hash(password, 11, (err, passwordHashed) => {
                    if(err) return handleErr(res, err, 'incorrect');
                    if(!passwordHashed) return handleErr(res, err, 'password is incorrect');
                    const newUser = newUser()
                    newUser.username = username;
                    newUser.password = password;
                })
            });
        }
    },
    logIn: (req, res) => {
        //code here
        //storing token
        const { username, password } = req.body;
        const faild = 'incorrect';
        User.findOne({ username: username })
            .then((user) => {
                if (!user) return handleErr(res, 400, failed);
                const payload = {
                    iss: 'Bean Soup',
                    id: user._id,
                }
             const token = jwt.sign(payload, process.env.SECRET);
             res.status(200).json({ message: 'login successfull' });
            })

    },
    logOut: (req, res) => {
        //code here
        //deleting token from localstorage
    },
    forgotPassword: (req, res) => {
        //twilio verification for new password
        //or reset email
        const { email } = req.body;
        User.findOne({ email }, (err, user) => {
            if (err) return handleErr(res, 500, 'Server Error');
            if (!user) return handleErr(res, 403, 'Could not find user');
            const random = ((Math.random() * 100) + 1).toString();
            const token = crypto.MD5(random);
        })
    }
}