import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      unique: true,
   },


});

export default mongoose.model("User", userSchema);