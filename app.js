var express = require('express');
const app = express();

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.NODE_PORT || 8088;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./static'))

let count = 0;

app.get('/', (req, res) => {
  console.log('Home: ', count++);
  res.render('index', { ENV });
})


app.listen(PORT, function (error) {
  if (error) {
    console.log('ರೃ∀ರೃ 报错了！！！', error);
    return
  }

  console.log(`
    APP RUNNING ✧(≖ ◡ ≖✿  — ${ENV} - ${PORT}
    ${ENV === 'development' ? `http://127.0.0.1:${PORT}`: 'http://diodon.cc/'}
  `);
})
