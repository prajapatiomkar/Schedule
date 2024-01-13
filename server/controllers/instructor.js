import userModel from "../models/user.js";

const signup = async (req, res, next) => {
  try {
    const { username, password, roles } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const duplicate = await userModel.findOne({ username });

    if (duplicate) {
      return res.status(409).json({ message: "duplicate username" });
    }
    console.log(roles);

    const user = await userModel.create({ username, password, roles });
    user.save();
    if (user) {
      res.status(201).json({ message: `new user ${username} created` });
    } else {
      res.status(400).json({ message: "invalid user data received" });
    }
  } catch (error) {
    next(error);
  }
};
const signin = (req, res, next) => {
  try {
    res.status(200).json({ message: "signin" });
  } catch (error) {
    next(error);
  }
};
const signout = (req, res, next) => {
  try {
    res.status(200).json({ message: "signout" });
  } catch (error) {
    next(error);
  }
};

export { signup, signin, signout };
