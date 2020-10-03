//CRUD ceate read uppdate delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

//

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the database");
    }

    // console.log("Connected correctly");
    const db = client.db(databaseName);

    // db.collection("uesrs").insertOne(
    //   {
    //     // _id: id,
    //     name: "rajjo",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "ritik",
    //       age: 20,
    //     },
    //     {
    //       name: "soham",
    //       age: 20,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert the documents ");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("Tasks").insertMany(
    //   [
    //     {
    //       description: "road task",
    //       completed: true,
    //     },
    //     {
    //       description: "garden task",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to connect the documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f10c32c14433a3598b9bc7f") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }

    //     console.log(user);

    //   }
    // );
    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({ age: 20 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("Tasks").findOne(
    //   { _id: new ObjectID("5f10c55052090511b81b4767") },
    //   (error, user) => {
    //     console.log(user);
    //   }
    // );
    // db.collection("Tasks")
    //   .find({ completed: false })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5f10c32c14433a3598b9bc7e") },
    //     { $inc: { age: 1 } }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("Tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    db.collection("users")
      .deleteOne({ name: "ritik" })
      .then((result) => {
        console.log("Work done");
      })
      .catch(() => {
        console.log("There is an error");
      });
  }
);
