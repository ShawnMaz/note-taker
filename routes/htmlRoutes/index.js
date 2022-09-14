const router = require('express').Router();

router.get('*', (req, res) => {
    res.status(404).send('The page you are looking for could not be found!');
});

module.exports = router;