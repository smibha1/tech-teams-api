const db = require('../index.js');

module.exports = {
  post: (req, res) => {
    console.log('this is the req.body= ', req.body)
    const user = {
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      availability: req.body.availability,
      description: req.body.description,
      location: req.body.location,
      imageurl: req.body.imageurl,
      title: req.body.title,
    };

    db.users.create(user)
      .then(data => res.status(200).send(data))
      .catch((err) => {
        throw err;
      });
  },
};
