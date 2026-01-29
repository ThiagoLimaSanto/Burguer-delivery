const router = require("express").Router();
const AdminController = require("../controllers/AdminController");

const { VerifyToken } = require("../middlewares/auth");

router.post("/register", VerifyToken, AdminController.register);
router.post("/login", AdminController.login);
router.get("/logout", VerifyToken, AdminController.logout);

module.exports = router;
