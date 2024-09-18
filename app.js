const express = require('express');
const path = require('path');
const app = express();
const productRouter = require('./app/product/router');
const log = require('./middlewares/logger');
const cors = require('cors');
const router = require('./routes');

app.use(express.json());
app.use(cors());

app.use(log);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../uploads')));
app.use(router);
app.use('/api/v1', productRouter);
app.use((req, res, next) => {
    res.status(404)
    res.send({ 
        status: 'Failed',
        message: 'Not Found' });
  });

app.listen(3000, () => {
  console.log(`Server: http://localhost:3000`);
});
module.exports = app;