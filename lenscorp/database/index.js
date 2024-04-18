const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT;

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

const routes = require("./routes/lensroutes");
app.use("/lenscorp/ai",routes)

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`);
})

const dbConnect = require("./init/database");
dbConnect();