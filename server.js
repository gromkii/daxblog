var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'))
  .use('/lib', express.static(__dirname + '/node_modules/'))
  .use(express.static('app'))
;

app.get('/', (req, res) => {
  res.sendFile('index.html', {root:'./app/views'});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
});
