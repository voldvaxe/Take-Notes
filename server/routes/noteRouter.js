const router = require('express').Router()
const noteCtrl = require('../controllers/noteCtrl')
const auth = require('../middleware/auth')
const upload = require('../middleware/image_uploading')

router.route('/note')
    .get(auth, noteCtrl.getNotes) //headers : Authentication -> notes
    .post(auth, upload.single('image'), noteCtrl.createNote) //headers : Authentication // body : title, description, image -> msg

router.route('/note/:id')
    .delete(auth, noteCtrl.deleteNote) //headers : Authentication // params : id -> msg
    .put(auth, upload.single('image'), noteCtrl.updateNote) //headers : Authentication // params : id // body : title, description, image -> msg


module.exports = router