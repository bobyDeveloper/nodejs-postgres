const models = require("../database/models");

const createVideogame = async (req, res) => {
    try {
        const videogame = await models.Videogame.create(req.body);
        return res.status(201).json({
            videogame
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };

    const getAllVideogames = async (req, res) => {
        console.log('getting videogames');
    try {
        const videogames = await models.Videogame.findAll({
            include: [
            ]
        });
    return res.status(200).json({ videogames });
    }catch (error) {
        return res.status(500).send(error.message);
    }
    };

    module.exports = {
        createVideogame,
        getAllVideogames
    };