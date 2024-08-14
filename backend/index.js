const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");


dotenv.config();
const app = express();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {         
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();
// mongoose.connect(process.env.MONGODB_URL,()=>{
//     console.log("Connected to mongoDB");
// })

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/v1/auth", authRoute);

app.use("/v1/user", userRoute);




app.listen(8000, () => {
    console.log("Server is running");
});
