//var name = "Can" 
//ecmascript 9 dan önce kullanılan bir değişken.

//let name = "Can" 
// Değişken tanımlamak için.
//console.log(name)

//const name = "Can"
// Sabit Tanımlamak için.


//var bir function scope, let ise block scope.

// function test(){
//     if(true){
//         let degisken="Merhaba Dünya!!!"
//     }
//     if(true){
//         console.log(degisken)
//     }
// }

// test()


// let degisken = "Merhaba Dünya"
// degisken = "Hello world"
// console.log(degisken)

// Hoisting: Bir değişkeni önce tanımlama sonra kullanma.
// degisken = "Merhaba Dünya"
// console.log(degisken)
// var degisken

// function topla(a,b){
//     return a+b
// }

// const topla = (a,b) => a+b

//Geleneksel yöntem
// function test(){
//     console.log("Merhaba"+this.name)
// }

// const person={
//     name:" Can",
//     soyle:test
// }

// person.soyle()

//Arrow function
// const test=()=>{
//     console.log("Merhaba "+this.name)
// }

// const person={
//     name:"Can",
//     soyle:test
// }

// person.soyle()


// function deneme(x){
//     return x
// }


// function addToCart(urun_adi,adet,fiyat){
//     console.log(urun_adi,adet,fiyat)
// }
// addToCart("elma",5,10)
// addToCart("armut",8,12)
// addToCart("limon",5,27)


// let urunler=[
//     {urun_adi:"elma",fiyat:5,adet:20},
//     {urun_adi:"armut",fiyat:7,adet:12},
//     {urun_adi:"limon",fiyat:9,adet:5}]

// console.log(urunler[0])

// function topla(...sayilar){
//     let toplam=0
//     for(let i=0;i<sayilar.length;i++){
//         toplam=toplam+sayilar[i]
//     }
//     console.log(toplam)
// }

// topla(10,20,30,40,50,60,70,80,90)

//distracting işlemi
// let [x,y,z]=[
//     {adi:"İç Anadolu Bölgesi",nufus:"20m"},
//     {adi:"Marmara Bölgesi",nufus:"30m"},
//     {adi:"Ege Bölgesi",nufus:"25m"},
// ]
// console.log(z.adi)
// console.log(z.nufus)

// function test(){
    
// }

// const test=()=>{

// }

// test => a+100

// const a= 150 

// if(a<100){
//     console.log("100 den küçük")
// }else if(a==100){
//     console.log("100 e eşit")
// }else{
//     console.log("100 den büyük")
// }

// const sonuc=a==100?"100 e eşit":"100 e eşit değil"
// console.log(sonuc)

// function example(){
//     if(condition1){
//         return value1
//     }else if(condition2){
//         return value2
//     }else if(condition3){
//         return value3
//     }
// }

// function example(){
//     return 
//     condition1?value1:
//     condition2?value2:
//     condition3?value3:
// }


const sayilar = [1,2,3,4,5,6,7,8,9]

// const cift=sayilar.filter(function(sayilar){
//     return sayilar%2===0
// })
// console.log(cift)

// const cift=sayilar.filter(sayilar=>sayilar%2===0)
// console.log(cift)

const sayi = sayilar.find(function(sayilar){
    return sayilar%2===0
})

console.log(sayilar)