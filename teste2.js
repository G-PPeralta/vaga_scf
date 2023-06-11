var data = require("./fakeData");

module.exports = function (req, res) {
    try {
        // desestruturando o corpo da requisição para evitar a criação de uma variável desnecessária
        const { name, job } = req.body;

        // validando o corpo da requisição para evitar que o usuário seja criado com dados inválidos
        if (!name || !job) {
            return res.status(400).send("Name and job are required");
        }

        const newUser = {
            id: data.length + 1, // cria um id auto incrementável
            name,
            job,
        }

        data.push(newUser);

        return res.status(201).send(newUser);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
};