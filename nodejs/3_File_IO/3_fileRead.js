//fs: File System
const fs = require('fs');

// Dosya adı sabite atanır.
const dosyaAd = 'denemeDosya.txt';

//Dosya Oku (Read Write)
fs.readFile(dosyaAd, 'utf-8', (hata, data)=>{
    if(hata){
        console.log("Dosya oluşturulamadı: ", hata);
        throw hata;
    }
    else
    {
        console.log("Dosya oluşturuldu." + __filename +"\n");
        console.log(data);
        console.log(data.toUpperCase());
    }
});