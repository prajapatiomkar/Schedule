import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    default: "Instructor",
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      next();
    }
    this.password = await bcryptjs.hash(
      this.password,
      await bcryptjs.genSalt(10)
    );
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (password, next) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    next(error);
  }
};

userSchema.methods.generateJWT = async function (next) {
  try {
    const token = await jwt.sign(
      { _id: this._id, roles: this.roles },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    return token;
  } catch (error) {
    next(error);
  }
};
const userModel = mongoose.model("User", userSchema);

export default userModel;
