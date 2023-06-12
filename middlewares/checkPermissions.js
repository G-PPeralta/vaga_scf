var data = require("../fakeData");

module.exports = function (req, res, next) {
  try {
    const userId = req.headers["user-id"]; // recupera o id do usuário do header da requisição

    const user = data.find((user) => user.id.toString() === userId);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    req.user = user;

    if (user.role !== "admin") {
      return res.status(403).send("User does not have permission");
    };

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal Server Error");
  }
};