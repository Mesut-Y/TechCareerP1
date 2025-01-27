//fs: File System
const fs = require('fs');

// Dosya adı sabite atanır.
const dosyaAd = 'denemeDosya.txt';
// Dosya içeriği değişkene atanır.
var dosyaIcerik='Merhaba yeni dünya'

//Dosya Oluştur (Create File)
fs.writeFile(dosyaAd, dosyaIcerik, 'utf-8', (hata)=>{
    if(hata){
        console.log("Dosya oluşturulamadı: ", hata);
        throw hata;
    }
    else
        console.log("Dosya oluşturuldu." + __filename);
});