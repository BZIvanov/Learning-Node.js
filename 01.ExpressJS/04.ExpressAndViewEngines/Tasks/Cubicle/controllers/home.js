const Cube = require('../models/Cube');

function handleQueryErrors(from, to) {
    let errors = [];

    if (!from || !to) {
        errors.push("Please fill all difficulties");
    }

    if (from < 1 || to > 6 || from > to) {
        errors.push("Invalid from:to range");
    }

    return errors;
}

module.exports = {
    homeGet: (req, res) => {
        Cube.find({})
            // with select we get only values we need separated by space
            .select('_id name imageUrl difficulty')
            .sort('-difficulty')
            .then(cubes => {
                res.render('index', { cubes });
            })
            .catch((e) => {
                console.log(e);
            });
    },
    about: (req, res) => {
        res.render('about');
    },
    search: async (req, res) => {
        let { name, from, to } = req.query;
        from = Number(from);
        to = Number(to);

        let errors = handleQueryErrors(from, to);
        if (errors.length > 0) {
            res.locals.globalErrors = handleQueryErrors(from, to);

            try {
                const cubes = await Cube.find()
                res.render('index', { cubes: cubes });
                return;
            } catch(err) {
                console.log(err)
            }
        }

        if (name && from && to) {
            Cube.find({})
                .where('difficulty')
                .gte(from)
                .lte(to)
                .then((cubes) => {
                    const filtered = cubes
                        .filter(c => c.name.toLowerCase().includes(name.toLowerCase()));

                    res.render('index', { cubes: filtered });
                })
        }
    }
}
