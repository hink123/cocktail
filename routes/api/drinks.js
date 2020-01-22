const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/drinks');

router.post('/', checkAuth, drinksCtrl.create);
router.delete('/:id', checkAuth, drinksCtrl.deleteOne);

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}
  