const mongoose = require('mongoose');

// MongoDB connection
const uri = "mongodb://localhost:27017/demo";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Model
const User = mongoose.model("User", userSchema);

// CRUD functions
async function createUser() {
  const user = new User({ name: "CSE", email: "CSE@example.com", age: 18 });
  await user.save();
  console.log("User created:", user);
}

async function getUsers() {
  const users = await User.find();
  console.log("All users:", users);
}

async function updateUser(email) {
  const user = await User.findOneAndUpdate({ email }, { age: 30 }, { new: true });
  console.log("Updated user:", user);
}

async function deleteUser(email) {
  const result = await User.deleteOne({ email });
  console.log("Deleted user:", result);
}

// Run
async function runCRUD() {
  //await createUser();
  //await getUsers();
  await updateUser("CSE@example.com");
  //await deleteUser("CSE@example.com");
  //await getUsers();
}

runCRUD();
