const User = require("../models/User");

module.exports = {
    async createUser(req, res) {
        try {
            const { name, cpf } = req.body;

            const user = await User.findOne({ where: { cpf } });

            if (user) {
                res.status(200).json({ message: "Já existe um usuario com este email" });
            } else {
                const users = await User.create({ name, cpf });

                res.status(200).json({ users });
            }

        } catch (error) {
            res.status(400).json({ error });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, cpf } = req.body;
            const user = await User.findOne({ where: { id } });

            if (!user) {
                res.status(401).json({ message: "Ops... usuario não existe" });
            } else {
                const users = await User.update({ name, cpf }, { where: { id } });

                res.status(200).json({ users });
            }
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async findAllUsers(req, res) {
        try {
            const users = await User.findAll({});

            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const user = await User.findOne({ where: { id } });

            if (!user) {
                res.status(401).json({ message: "Ops... usuario não existe" });
            } else {
                await User.destroy({ where: { id } })
                res.status(200).json({ msg: "usuario deletado" });
            }


        } catch (error) {
            res.status(400).json({ error });
        }


    }

}
