export const isSeller = async (req, res, next) => {
  try {
    let role = req.user.role;
    if (role == "seller") {
      next();
    } else {
      return res.status(401).json({
        message: "You are not Authorized",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't Identify The Role",
    });
  }
};
