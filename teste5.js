var data = require("./fakeData");

const userReadCounts = new Map();

module.exports = function (req, res) {

    try {
        const name = req.query.name;

        const user = data.find((item) => item.name === name);

        if (!user) {
            return res.status(404).send("User not found");
        }

        const count = userReadCounts.has(name) ? userReadCounts.get(name) + 1 : 1;
        userReadCounts.set(name, count);

        return res.status(200).send(`Usuário ${name} foi lido ${count} vezes.`);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server Error");
    }

};