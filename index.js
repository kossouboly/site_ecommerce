const express = require('express');
const app = express();

const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('hello topman  🎉');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}🎉`);
});
