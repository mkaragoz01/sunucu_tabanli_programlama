const router = require("express").Router()
const {login,register} = require("../controllers/controller..js")
router.post("/login")

router.post("/register")
//post: Veri gönderme get: Veri alma put: Veri güncelleme patch: Veri güncelleme delete: Veri silme
module.exports = router