const router = require('express').Router();
const path = require('path');

router.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, '../../public/index.html'));
    res.status(404).send('Unable to find what you are looking for');
});

module.exports = router;