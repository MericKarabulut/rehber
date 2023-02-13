const express = require("express");
const { listUsers, registerUser, updateUser, deleteUser } = require("../controllers/userControler");

router = express.Router();

router.get("/listUser", listUsers);
router.post("/registerUser", registerUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser );

module.exports = router