const dbConn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")

const login = async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=req.bosy.sifre

    //console.log(req,body)
    //return res.json(req.body)

    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=? ",[kullanici_adi],(err,result)=>{
        if(result.length>0){
            const comparePassword=bcrypt.compare(sifre,result[0],sifre)

            if(comparePassword){
              return restart.status(200).json({
                success:true,
                data:res.body,
                message:"Giriş Başarılı"
            })
        }else{
            return restart.status(203).json({
                success:false,
                message:"Kullanıcı veya Şifre Uyumsuz" 
                
            })
        }  
        }else{
            return restart.status(203).json({
                success:false,
                message:"Kullanıcı Girişi Başarısız"
                
            })
        }
            
    })
}

const register = async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=await bcrypt.hash(req.body.sifre,10) // Şifreleme işlemi
    const eposta=req.body.eposta
    const adi=req.body.adi
    const soyadi=req.body.soyadi
    const tel_no=req.body.tel_no
    const cinsiyet=req.body.cinsiyet
    const dogum_tarihi=req.body.dogum_tarihi

    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=?",kullanici_adi,(err,result)=>{
        if(result.length>0){
            return res.status(201).json({
                success:false,
                message:"Kayıt Mevcut"
            })
        }else{
            dbConn.query("INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi) VALUES (?,?,?,?,?,?,?,?) ",
            [kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi],(err,result)=>{
                return res.status(201).json({
                    success:true,
                    message:"Kayıt Başarılı"
                })
            })
        }
    })
}

module.exports = {login,register}