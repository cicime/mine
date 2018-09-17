var express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./static'))


app.get('/', (req, res) => {
  
  res.render('index')
})


app.listen(80, function (error) {
  console.log('runing 80')
})
