let express = require('express')
let router = express.Router()
let Value = require('../db/db').Parameter

/* GET users listing. */
router.get('/:type/:date/:value', (req, res) => {
    console.log(req.params)
    let data = {
        'type': req.params.type,
        'date': req.params.date,
        'value': req.params.value
    }

    const value = new Value(data)
    value.save(data)
        .then(result => {
            res.send(result)
        })

})

module.exports = router
