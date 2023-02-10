const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = new User({
    username,
    password: hash,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send({ error: "User not found" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).send({ error: "Invalid password" });

    res.send({ message: "Success" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/login", async (req, res) => {
  // ... (verify password code) ...

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWT_SECRET
  );
  res.header("auth-token", token).send({ message: "Success", token });
});

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send({ error: "Access denied" });
};
