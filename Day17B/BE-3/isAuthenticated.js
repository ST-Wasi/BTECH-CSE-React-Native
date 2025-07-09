

export const isAuthenticated = (req, res, next) => {
  let isAUth = false;
  if (isAUth) {
    console.log("Log from IF Condition inside Middle ware");
    next();
  } else {
    console.log("Log from Else Condition inside Middle ware");

    res.json({ message: "You are Unauthorized" });
  }
};
