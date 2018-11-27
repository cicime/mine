var express = require('express');
const app = express();

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.NODE_PORT || 8088;

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('./static'))


app.get('/', (req, res) => {
  res.render('index', { ENV });
})


app.listen(PORT, function (error) {
  if (error) {
    console.log('ರೃ∀ರೃ 报错了！！！', error);
    return
  }

  console.log(`APP RUNNING ✧(≖ ◡ ≖✿  — ${ENV} - ${PORT}`);
})
