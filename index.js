const express = require("express");
const app = express();
const mongoose = require("mongoose");

const route = require("./view/route")

const PORT = process.env.PORT | 5000;
app.use(express.json());
app.use("/api/products", route)

mongoose.connect("mongodb+srv://gokul:gokul123@backenddb.listy2n.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`Server is Running @ ${PORT}`);
        });
})
.catch((error)=>{
    console.log(error)
})




