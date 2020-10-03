require("../src/db/mongoose");
const User = require("../src/models/users");

//5f1e2344d070d64b1854a987

// User.findByIdAndUpdate("5f2871986dc4ad411450dffe", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f2871986dc4ad411450dffe", 18)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
