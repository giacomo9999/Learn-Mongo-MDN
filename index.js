const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/mydatabase";

mongoose.connect(
  mongoDB,
  { useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log("Successfully connected.");
  }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo connection error."));

const authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

const storySchema = Schema({
  name: String,
  author: [{ type: Schema.Types.ObjectId, ref: "Author" }]
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
