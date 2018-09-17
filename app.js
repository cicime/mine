var express = require('express');

const app = express();


app.use(express.static('./static'))


// -------------------------------------
app.listen(80, function (error) {
  console.log('runing 80')
})
