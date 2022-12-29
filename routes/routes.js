const exoress = require('express')
const router = exoress.Router();
const { getnews } = require('../controller/controller')


router.get('/news/india', getnews);



module.exports = router;