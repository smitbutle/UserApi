const express=require('express');
const router = require('./router');
const app=express();
const cors = require('cors');

const mongoose = require('mongoose');

const username = "smit";
const password = "smit";
const cluster = "mernapp.vpo7txs";
const dbname = "signup";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`,
    // ,
    {
        useNewUrlParser: true,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


const PORT =4000;

const corsOptions = {
    origin: 'https://apiuserdata.onrender.com/',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
