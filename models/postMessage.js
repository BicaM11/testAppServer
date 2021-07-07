import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
