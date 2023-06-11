var data = require("./fakeData");

const getUser = (req, res, _next) => {
    try {
        const name = req.query.name;

        // Apesar de a complexidade do find ser O(n), no caso a mesma que o for, o find pode potencialmente ser mais performático, tendo em vista que a iteração para assim que o item for encontrado, enquanto o for, da maneira que foi escrita (sem o return assim que encontrar o item), sempre irá iterar por todos os itens do array.

        // Além disso, o find é uma função nativa do JavaScript, enquanto o for é uma estrutura de repetição, que é uma construção da linguagem.

        // Por fim, o find melhora a legibilidade do código, pois é uma função que já tem um propósito bem definido, enquanto o for pode ser usado para diversas coisas, o que pode deixar o código mais confuso.

        const user = data.find((item) => item.name === name);

        if (!user) {
            return res.status(404).send("User not found");
        }

        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
};



const getUsers = (_req, res, _next) => {
    try {
        if (!data) {
            return res.status(404).send("Users not found");
        }

        return res.status(200).send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
};


module.exports = {
    getUser,
    getUsers
};