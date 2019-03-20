const express = require('express');
const bodyparser= require('body-parser');
const path= require('path');
const channelRoute= require('./router/channel');
const app=express();
app.use(bodyparser.json());
const PORT = process.env.PORT || 3001;

const appPath=path.join(__dirname,'..','dist');

app.use(express.static(appPath));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'));
});

app.use('/api/lessons', channelRoute);

app.listen(PORT,function () {
  console.log('App is running at Port !'+PORT);

})
