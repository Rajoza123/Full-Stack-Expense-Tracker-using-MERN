const expr = require('express')
const app = expr()
const cors = require('cors')
app.use(cors())
const dotenv = require('dotenv')
const connectDb = require('./connectDb')
dotenv.config()
app.use(expr.json())
connectDb()
app.get("/" ,(req,res)=>{
    res.send('<h1>hello world</h1>')
})

const PORT = 8000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})