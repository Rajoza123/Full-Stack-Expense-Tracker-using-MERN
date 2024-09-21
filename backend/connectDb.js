const mg = require('mongoose')

const connectdb = async () =>{
    try{
        await mg.connect(process.env.MONGO_URL)
        console.log("connected")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectdb