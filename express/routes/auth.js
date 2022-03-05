const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();
const passport = require('passport')


router.post('/signup', async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const exUser = await User.findOne({ where: {email } });
        if (exUser) {
            return res.send('이미 존재하는 이메일입니다.')
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            name,
            email,
            password: hash
        });
        return res.send('signup success')
    } catch(error) {
        console.error(error);
    }
})

router.post('/login', (req, res, next) => {
    
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if(!user) {
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
   
});

module.exports = router;