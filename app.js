const express = require('express')
const router=require('./routers')
const path=require("path")
require('dotenv/config')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,"index.html"))
})
app.get('/musteri_ekle', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_ekle.html"))
})
app.get('/musteri_sil', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_sil.html"))
})
app.get('/musteri_guncelle', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_guncelle.html"))
})
app.get('/musteri_getir', function (req, res) {
  res.sendFile(path.join(__dirname,"musteri_getir.html"))
})
//Midllewares
app.use(express.json({limit:'50mb',extended:true,parameterLimit:50000}))
app.use('/api',router)
app.listen(process.env.PORT)