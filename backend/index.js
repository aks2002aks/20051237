const express = require('express');
const app = express();
const trainRoutes = require('./routes/trainRoutes');

app.use(express.json());

app.use('/getalltrains', trainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
