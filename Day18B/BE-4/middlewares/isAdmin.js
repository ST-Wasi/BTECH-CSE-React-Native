export const isAdmin = async (req, res, next) => {
  try {
    let role = req.user.role;
    if (role == "seller") {
      next();
    } else {
      return res.status(401).json({
        message: "You are not AUthorized",
      });
    }
  } catch (error) {}
};
