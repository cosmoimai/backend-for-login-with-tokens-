const mongoose = require("mongoose");
//const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     trim: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a possitive number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "  abhi bhaware",
//   email: "abhi@gmail.com",
//   age: 18,
// });

// const User = mongoose.model("User", {
//   email: {
//     type: "String",
//     required: true,
//   },
//   password: {
//     type: "String",
//     required: true,
//     trim: true,
//     validate(value) {
//       if (value.length < 6) {
//         throw new Error("Your password is too short");
//       } else {
//         if (value.includes("password")) {
//           throw new Error(
//             "Yor password contains the word password please change it"
//           );
//         }
//       }
//     },
//   },
// });

// const me = new User({
//   email: "abhishek@gmail.com",
//   password: "kjcpassword",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     defalut: false,
//   },
// });

// const currenttask = new Task({
//   description: "watering the garden",
//   completed: false,
// });

// currenttask
//   .save()
//   .then(() => {
//     console.log(currenttask);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
