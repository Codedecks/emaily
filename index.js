// https://whispering-bastion-13555.herokuapp.com/
// https://git.heroku.com/whispering-bastion-13555.git
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Node.j running on port ${PORT}.`);
});
