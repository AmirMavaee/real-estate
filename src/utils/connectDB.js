const { default: mongoose } = require("mongoose");

const url = process.env.MONGO_URL;

async function connectDB(){
    if(mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery" , false);
    await mongoose.connect(url);
    console.log("Connect DB");
}

export default connectDB;