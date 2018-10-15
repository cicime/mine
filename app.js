var express = require('express');

const app = express();
const ENV = process.env.NODE_ENV;

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./static'))


app.get('/', (req, res) => {

  res.render('index', { ENV });
})


app.listen(80, function (error) {
  console.log('runing 80')
})
