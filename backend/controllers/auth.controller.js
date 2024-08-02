const db = require('../models');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt.utils');

// User signup
exports.signup = async (req, res) => {
  try {
    const user = await db.user.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const token = generateToken(user);

    res.status(201).send({ user, token });

  } catch (err) {
    res.status(500).send({ message: err.message });
    
  }
  console.log("***Signup Hitted")

};

// User login
exports.login = async (req, res) => {
    console.log("login Success*****")

  try {
    const user = await db.user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = generateToken(user);

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token,
      message: 'LoginSuccess....',
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("***login Hitted")

  }

};
