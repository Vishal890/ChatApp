const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const messageRoute = require("./routes/messagesRoute");
const mongoose = require("mongoose")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)
app.use("/api/messages", messageRoute);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
console.log(err)
})

const server = app.listen(process.env.PORT,()=>{
console.log(`Server is running on port ${process.env.port}`);
})