const express = require ('express');
const routes = express.Router();

const {greet, redirectCallback} = require ('../controllers/oauthRoutesController');

routes.get('/', greet)

var GoogleStrategy = require('passport-google-oauth20');
const passport = require('passport')

const clientID = "982593837310-bi63maq59h6psaurifon42ehqrofj0s6.apps.googleusercontent.com";
const clientSecret = "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";
const redirectURI = "http://localhost:3000/oauth/google/callback";

passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: redirectURI,
    scope: [ 'profile' ],
    state: true
  }, (accessToken, refreshToken, profile, done) => {
  		done(null, profile); 
  }
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});

routes.get ('/google', passport.authenticate('google'));

routes.get ('/google/callback', 
	passport.authenticate('google'),
	redirectCallback
);

module.exports = routes;