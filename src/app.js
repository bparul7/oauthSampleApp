const express = require ('express');
const app = express();
const expressSession = require ('express-session');

const port = process.env.PORT | 3000;
const localhost = "127.0.0.1";

const passport = require ('passport');

app.use (express.json());
app.use(expressSession ({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
const oauthRoutes = require ('./routes/oauthRoutes');
const userRoutes = require ('./routes/userRoutes');
const crudRoutes = require ('./routes/crudRoutes');

app.use ('/oauth', oauthRoutes);
app.use ('/', userRoutes);
app.use ('/', crudRoutes);

app.listen(
	port, 
	console.log (`Server is running on http://${localhost}:${port}/`)
);