const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routeURls = require("./routes/routes")
const cors = require('cors')

dotenv.config()

// connecting to the cluster 
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("Databse connected");
});

app.use(express.json()) // invoking body parser 
app.use(cors())
app.use('/app', routeURls)


app.listen(4000, () => {
    console.log("Server running on port 4000");
})