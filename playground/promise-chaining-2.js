require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f3e96d6b8531132647d0f00")
//   .then((task) => {
//     console.log("this task has been removed\n" + task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5f1e2e89e77da829a436857c")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
