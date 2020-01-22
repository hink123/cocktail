const User = require('../models/user');

module.exports = {
    create,
    deleteOne
}

async function create(req, res) {
    const user = await User.findOne({"_id": req.user._id});
    user.favDrinks.push(req.body)
    user.save()
    res.status(200).json(user);
}

async function deleteOne(req, res) {
    try {
        const user = await User.findOne({"_id": req.user._id});
        let idx = user.favDrinks.findIndex(function(drink) {
            return drink._id.toString() == req.params.id.toString();
        })
        user.favDrinks.splice(idx, 1);
        user.save();
        res.status(200).json(user);
    } catch (err) {
        res.json({err})
    }
}