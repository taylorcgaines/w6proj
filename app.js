
const express = require("express");
const app = express();
const mustache = require("mustache-express");
const models = require("./models");
const faker = require("faker");
const bodyParser = require("body-parser");
const validator = require("express-validator");
const session = require("express-session");

app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

const sessionRoutes = require("./routes/session")
const mainRoutes = require("./routes/main")
const blabRoutes = require("./routes/blab")

app.use(session({
  secret: 'blahbleeblahbloo',
  resave: false,
  saveUninitialized: true
}))

app.use(sessionRoutes)
app.use(mainRoutes)
app.use(blabRoutes)

app.listen(3000, function(){
  console.log("here i go! zoom~ http://0.0.0.0:3000")
})

// var loginSet = models.users.build({
//   username: 'tay',
//   password: '123'
// })
// loginSet.save();

// var loginSet2 = models.users.build({
//   username: 'kyle',
//   password: '456'
// })
// loginSet2.save();

// var blab1 = models.blabs.build({
//   userid: '1',
//   body: faker.lorem.sentence()
// })
// blab1.save();
//
// var blab1 = models.blabs.build({
//   userid: '1',
//   body: faker.lorem.sentence()
// })
// blab1.save();
//
// var blab1 = models.blabs.build({
//   userid: '1',
//   body: faker.lorem.sentence()
// })
// blab1.save();
//
// var blab2 = models.blabs.build({
//   userid: '3',
//   body: faker.lorem.sentence()
// })
// blab2.save();
//
// var blab2 = models.blabs.build({
//   userid: '3',
//   body: faker.lorem.sentence()
// })
// blab2.save();

// var likes1 = models.likes.build({
//   userid : '2',
//   blabid : '1',
// })
// likes1.save();
//
// var likes1 = models.likes.build({
//   userid : '1',
//   blabid : '3',
// })
// likes1.save();
//
// var likes1 = models.likes.build({
//   userid : '1',
//   blabid : '1',
// })
// likes1.save();
