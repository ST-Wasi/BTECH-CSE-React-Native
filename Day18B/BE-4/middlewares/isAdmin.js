export const isAdmin = async (req, res, next) => {
  try {
    let role = "admin";
    if (role == "admin") {
      next();
    } else {
      return res.status(401).json({
        message: "You are not AUthorized",
      });
    }
  } catch (error) {}
};
