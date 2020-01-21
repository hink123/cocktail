const User = require('../models/user');

module.exports = {
    create
}

async function create(req, res) {
    // await console.log('YOOOOO: ', req.user, req.body);
    const user = await User.findOne({"_id": req.user._id});
    user.favDrinks.push(req.body)
    user.save()
    res.json(user);
}