var data = require("./fakeData");

// module.exports = function (req, res) {

//     var id = req.query.id;

//     const reg = data.find(d => id == id);
//     reg.name = req.body.name;
//     reg.job = req.body.job;

//     res.send(reg);

// };

module.exports = function (req, res) {
    try {
        const { id } = req.query;

        const userToUpdate = data.find((user) => user.id.toString() === id);

        if (!userToUpdate) {
            return res.status(404).send("User not found");
        }

        const { name, job } = req.body;

        if (!name || !job) {
            return res.status(400).send("Name and job are required");
        }

        userToUpdate.name = name;
        userToUpdate.job = job;

        return res.status(200).send(userToUpdate);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
};
