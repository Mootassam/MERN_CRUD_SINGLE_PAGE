const router = require("express").Router();
const { json } = require("body-parser");
const User = require("../Models/UserModel");
router.get("/all", async (req, res) => {
  try {
    const response = await User.find({});
    return res.send(response);
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndRemove({ _id: id });
    res.send(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/add", async (req, res) => {
  const user = req.body.user;

  const response = await new User({
    name: user.Name,
    prenom: user.Prenom,
    debut: user.Debut,
    fin: user.Fin,
    price: user.Price,
  });
  try {
    response.save();
    res.send("User added succussfull");
  } catch (error) {
    return res.status(404).json(error);
  }
});

router.put("/update", (req, res) => {
  console.log(update);
});

module.exports = router;
