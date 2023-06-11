var data = require("./fakeData");

module.exports = function (req, res) {

    try {
        const { name } = req.query;
        const userIndex = data.findIndex((item) => item.name === name); // encontra o índice do usuário no array
        if (userIndex === -1) { // se o índice for -1, significa que o usuário não foi encontrado
            return res.status(404).send("User not found");
        }
        data.splice(userIndex, 1); // remove o usuário do array
        return res.status(200).send("User deleted");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }

};