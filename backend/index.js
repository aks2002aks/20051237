const express = require('express');
const cors = require('cors');
const app = express();
const trainRoutes = require('./routes/trainRoutes');

app.use(cors());
app.use(express.json());
app.use('/', trainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
