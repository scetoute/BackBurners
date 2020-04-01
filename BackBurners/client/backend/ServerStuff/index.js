/*const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const database = require('./Database')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db: database })
const app = express();
const passport = require('passport')


mysql.createConnection()
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  database.models.USER
    .findById(id)
    .then(user => done(null, user))
    .catch(done)
);

const createApp = () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', require('./Auth/authentication'));
  app.use('/', require('./Api'));
  app.get('/', (req, res) => res.send('EarMark!'))

  app.use(
    session({
      secret: 'EarMark to da moon',
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  console.log('HERRREEEE')
}
const databaseSync = () => {
  database.sync().then(function(){
    console.log('DB connection sucessful.');
  }, function(err){
    // catch error here
    console.log(err);
  
  });
}
const startListening = () => {
  // start listening (and create a 'server' object representing our server)
   app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};
module.exports = app;

const start = async () => {
  //databaseSync()
  createApp()
  startListening()
  //sessionStore.sync()
  //databaseSync()
   //sessionStore.sync()
   //.then(databaseSync())
   //.then(createApp())
   //.then(startListening())
}

start()
*/
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const database = require('./Database')

const createApp = () => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }));

  database.sync().then(() => {
    console.log('SHITTTT FINALLY WORKS')
  }).catch(err => {
    console.log('IM FED TF UP', err)
  })
  const port = 3000;
  app.set('port', port);
  const server = http.createServer(app);
  server.listen(port);

}
createApp()