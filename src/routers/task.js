const express = require("express");
const Task = require("../models/task");
const User = require("../models/users");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  //const task = await new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    task.save();
    res.send(task);
  } catch (e) {
    return res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.send(task);
  //   })
  //   .catch(() => {
  //     res.status(400).send(e);
  //   });
});

router.get("/tasks", auth, async (req, res) => {
  try {
    //const tasks = await Task.find({owner: req.user._id});
    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
  } catch (e) {
    res.send(400).send();
  }

  // Task.find({})
  //   .then((description) => {
  //     if (!description) {
  //       return res.status(404).send();
  //     }

  //     res.send(description);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    //const task = await Task.findById({ _id });
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(400).send();
  }

  // Task.findById({ _id })
  //   .then((description) => {
  //     if (!description) {
  //       return res.status(404).send();
  //     }

  //     res.send(description);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid update" });
  }

  try {
    // const task = await Task.findByIdAndUpdate(req.params.id, res.body, {
    //   new: true,
    //   runValidators: true,
    // });

    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    //const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    //const task = await Task.findOneAndDelete({
    //   _id: req.params.id,
    //   owner: req.user._id,
    // });

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.status(200).send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
