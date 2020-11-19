//jshint esversion: 9

/////////////export module//////////////
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// const bodyParser = require('body-parser');
const addRoute = require("./routeStructure/addRoute");
const dataModel = require('./dbModel/schema');



const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

/////////using body-parser/////////////////

/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); */



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///////////connecting mongoDB local server////////////
mongoose.connect('mongodb://localhost:27017/mernDB',{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection successful');
}).catch(err => {
    console.log(err);
});


/////////////add route///////////
app.use('/add', addRoute);

app.patch("/update/:id", (req, res) => {
    dataModel.updateOne({_id: req.params.id},{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    }).then(() => {
        res.send("contact updated");
    }).catch(err => {
        res.send(err);
    });
});

app.post("/delete", (req, res) => {
    dataModel.deleteOne({ _id: req.body.id}).then((data)=> {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
});

app.get('/', (req, res) => {
    dataModel.find((err,response)=> {
        if(err){
            res.send(err);
        }else {
            res.send(response);
        }
    });
});
app.get('/:id', (req, res) => {
    dataModel.find({_id: req.params.id},(err,response)=> {
        if(err){
            res.send(err);
        }else {
            res.send(response);
        }
    });
});


//////////////Setup listener////////////
app.listen(port, () => {
    console.log(`listing port no ${port}`);
});