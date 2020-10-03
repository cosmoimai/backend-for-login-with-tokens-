const express = require("express");
require("./db/mongoose");
//const User = require("./models/users");
//const Task = require("./models/task");
const userrouter = require("./routers/user");
const taskrouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

//middleware function
// app.use((req, res, next) => {
//   // console.log(req.method, req.path);
//   // next();

//   if (req.method == "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("the site is under maintainance please try again later");
// });

app.use(express.json());
app.use(userrouter);
app.use(taskrouter);

//
//Without middleware: new request -> run route handler
//
//With middleware:    new request -> do something -> run route handler
//

// const router = new express.Router();

// router.get("/test", (req, res) => {
//   res.send("This is from my other router");
// });

// app.use(router);

const bcyrpt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedpassword = await bcyrpt.hash(password, 8);

//   console.log(password);
//   console.log(hashedpassword);

//   const isMatch = await bcyrpt.compare("Red12345!", hashedpassword);

//   console.log(isMatch);
// };

// myFunction();

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};
myFunction();

app.listen(port, () => {
  console.log("server is on port " + port);
});

const Task = require("./models/task");
const User = require("./models/users");

const main = async () => {
  // const task = await Task.findById("5f722e3db0528e215c41ab95");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("5f722d515f41923130250dc5");
  //console.log(user);
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();

// const pet = {
//   name: "HAL",
// };

// pet.toJSON = function () {
//   console.log(this);
//   return {};
// };

// console.log(JSON.stringify(pet));
