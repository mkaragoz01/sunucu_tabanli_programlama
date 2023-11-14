const express = require('express')
const app = express()
const db_connect = require("./db/mysql_connect")
const router = require("./routers")
require("dotenv/config")

app.set('view engine', 'ejs')

//request veri çekme responsive gönderme
app.get('/', function (req, res) {
  //res.send('Hello World')
  //res.download("app.js")
  res.render("index", {text: "World"})
})

app.use(express.json({limit:"50mb",extended:true,parameterLimit:50000}))
app.use("/api",router)
app.listen(process.env.PORT)