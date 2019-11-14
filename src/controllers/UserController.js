const User = require('../models/User');

// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

module.exports = {
    async get(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    },
    async post(req, res) {
        const { email, name, birthday, bio } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                email,
                name,
                birthday,
                bio,
            });
        }

        return res.json(user);
    },
    async put(req, res) {
        const { user_id } = req.query;
        const { name, birthday, bio } = req.body;

        let user = await User.findById(user_id);

        if (!user) return res.status(400).json({ error: 'User does not exists' });

        if (name) await User.updateOne({ name });
        if (birthday) await User.updateOne({ birthday });
        if (bio) await User.updateOne({ bio });

        return res.json(spot)
    },
    async delete(req, res) {

        return res.json(spot)
    }

};