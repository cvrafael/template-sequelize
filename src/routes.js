const { Router } = require("express");
const User = require("./models/User");
const UserControllers = require("./controllers/UserControllers")
const router = Router();

router.post("/", UserControllers.createUser);
router.put("/update/:id", UserControllers.updateUser);
router.get("/users", UserControllers.findAllUsers);
router.delete("/delete/:id", UserControllers.deleteUser);

module.exports = router;
