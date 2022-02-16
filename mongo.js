const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

module.exports = async () => {
    await mongoose.connect(process.env.mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // userFindAndModify: false
    })
    return mongoose
}

mongoose.connection.on("connected", () => {
    console.log("Connected to Mongoose Database!!")
})