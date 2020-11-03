const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const generator = require('./generator.js');

let generate = new generator();

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');


app.get('/', (req, res) => {
    res.render('index', {gmem: generate.gmemify()});
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
