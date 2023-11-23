const readline = require('readline');

class HesapMakinesi {
    constructor() {
      this.sonuc = 0;
    }
  
    // Toplama
    topla(sayi) {
      this.sonuc += sayi;
    }
  
    // Çıkarma
    cikar(sayi) {
      this.sonuc -= sayi;
    }
  
    // Çarpma
    carp(sayi) {
      this.sonuc *= sayi;
    }
  
    // Bölme
    bol(sayi) {
      this.sonuc /= sayi;
    }
  
    // Sonucu yazdırma
    yazdir() {
      console.log(this.sonuc);
    }
 }
  
 // Hesap makinesini başlat
 const hesapMakinesi = new HesapMakinesi();
  
 // Kullanıcıdan girdi alma
 let islem;
 do {
    console.log("İşlemi girin: ");
    readline.question("", function(islem) {
      // İşlemi kontrol etme
      switch (islem) {
        case "+":
          readline.question("Birinci sayıyı girin: ", function(sayi1) {
            hesapMakinesi.topla(Number(sayi1));
            readline.question("İkinci sayıyı girin: ", function(sayi2) {
              hesapMakinesi.topla(Number(sayi2));
            });
          });
          break;
        case "-":
          readline.question("Birinci sayıyı girin: ", function(sayi1) {
            hesapMakinesi.cikar(Number(sayi1));
            readline.question("İkinci sayıyı girin: ", function(sayi2) {
              hesapMakinesi                .cikar(Number(sayi2));
            });
          });
          break;
        case "*":
          readline.question("Birinci sayıyı girin: ", function(sayi1) {
            hesapMakinesi.carp(Number(sayi1));
            readline.question("İkinci sayıyı girin: ", function(sayi2) {
              hesapMakinesi.carp(Number(sayi2));
            });
          });
          break;
        case "/":
          readline.question("Birinci sayıyı girin: ", function(sayi1) {
            hesapMakinesi.bol(Number(sayi1));
            readline.question("İkinci sayıyı girin: ", function(sayi2) {
              hesapMakinesi.bol(Number(sayi2));
            });
          });
          break;
        case "q":
          hesapMakinesi.yazdir();
          break;
        default:
          console.log("Geçersiz işlem!");
      }
    });
 } while (islem !== "q");

 // Kullanıcıdan girdi almak için readline kullanın
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 rl.question("İşlemi girin: ", function(islem) {
   // İşlemi kontrol etme
   switch (islem) {
     case "+":
       // ...
       break;
     case "-":
       // ...
       break;
     case "*":
       // ...
       break;
     case "/":
       // ...
       break;
     case "q":
       hesapMakinesi.yazdir();
       break;
     default:
       console.log("Geçersiz işlem!");
   }
 });