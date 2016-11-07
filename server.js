var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.use(bodyParser.json())
  .use(bodyParser({urlencoded:false}))
  .use(methodOverride('_method'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
});
