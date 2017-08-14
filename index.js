const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config=require(`./config/database`);

const path=require('path');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{

    if(err){

        console.log(`not conneted to database : ${err}`);
    } else {

        console.log(`connected to database : ${config.db}`)
    }

});

app.use(express.static(__dirname + `/client/dist/`));

app.get('*', (req, res)=> {

  res.sendFile(Path2D.join(__dirname + `/client/dist/index.html`));

});

const port=3010;

app.listen(port, ()=> {
    console.log(`Listening to port: ${port}`);
});