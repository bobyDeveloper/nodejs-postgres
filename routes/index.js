const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/videogames', controllers.createVideogame);
router.get('/videogames', controllers.getAllVideogames);

module.exports = router;