const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
  console.log(req.body);
  const {user_name, pass_word, email, first_name, last_name, age} = req.body;
  const db = req.app.get('db');
  //rounds of hash
  const rounds = 10;
  //gets user password and hashes it
  let hash = await bcrypt.hash(pass_word, rounds);
  //calls database and puts info in including hash
  db.addUser([user_name, hash, email, first_name, last_name, age])
    .then(results => {
      res.status(200).send(results);
    })
    .catch(console.log);
};

const checkUser = (req, res) => {
  const {user_name, new_pass_word} = req.body;
  console.log(req.body);
  const db = req.app.get('db');
  //calls db
  db.getUser([user_name, new_pass_word]).then(async results => {
    //if resuls comes back
    if (results[0]) {
      //destructure hash from our db
      let {hash} = results[0];
      //compares passwords used from log in to hash used creating account
      let check = await bcrypt.compare(new_pass_word, hash);
      if (check == true) {
        console.log('logged in');
      } else {
        console.log('thats not u');
      }
    }
    ß;
  });
};

module.exports = {
  addUser,
  checkUser,
};
